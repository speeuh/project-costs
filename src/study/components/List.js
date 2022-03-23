import Item from "./Item"

function List(){

    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="BMW" ano_lancamento={2014}/>
                <Item marca="AUDI" ano_lancamento={2021}/>
                <Item />
            </ul>
        </>
    )
}

export default List