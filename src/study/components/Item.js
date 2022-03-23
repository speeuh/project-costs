import PropTypes from 'prop-types'

function Item( { marca, ano_lancamento } ){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
}

Item.defaultProps = {
    marca: "Não preenchido",
    ano_lancamento: 0,
}

export default Item