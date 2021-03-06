import { useHistory } from 'react-router-dom'
import { stringify } from 'uuid'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const history = useHistory()

    function createPost(project) {

        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // redirect
            history.push("/projects", {message: "Project created successfully"})
        })
        .catch(err => console.log(err))

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Create your project to add the services</p>
            <ProjectForm handleSubmit={createPost} btnText="Create Project" />
        </div>    
    )
}

export default NewProject