import Item from './Item';

function List({title, items}) {
    return (
        <>
        <h1>{title}</h1>
        <ul>
            {items.map((cadaItem, index) => <Item key={index} item={cadaItem.item} tempo={cadaItem.tempo} />)}
        </ul>
        </>
    )
}

export default List;