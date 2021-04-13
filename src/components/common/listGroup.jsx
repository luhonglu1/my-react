import React from 'react'

const ListGroup = (props) => {
  let { items, textProperty, valueProperty, selectItem, onItemSelect } = props

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={
            selectItem && selectItem._id === item._id
              ? 'list-group-item active'
              : 'list-group-item'
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  )
}

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
}

export default ListGroup
