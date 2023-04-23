import PropTypes from 'prop-types';

function Item({item, tempo}){
    return (
        <>
        <li>{item} - {tempo}</li>
        </>
    )
}

Item.propTypes = {
    item: PropTypes.string.isRequired,
    tempo: PropTypes.string.isRequired
}

Item.defaultProps = {
    item: 'Falta o item',
    tempo: 'Falta o tempo' 
}

export default Item;