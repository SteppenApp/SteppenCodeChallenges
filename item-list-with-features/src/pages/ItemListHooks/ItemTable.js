import React from 'react';
import Item from './Item';

const ItemTable = (props) => {
  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>Action</th>
          <th>Text</th>
        </tr>
      </thead>
      <tbody>
        {props.items.length > 0 ? (
          props.items.map((item) => (
            <Item
              item={item}
              editRow={props.editRow}
              deleteUser={props.deleteUser}
              isEditing={props.isEditing}
            />
          ))
        ) : (
          <tr>
            <td colSpan={3}>No items</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ItemTable;
