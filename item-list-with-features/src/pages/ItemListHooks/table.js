import React from 'react';

const ItemTable = (props) => (
  <table className="table is-fullwidth">
    <thead>
      <tr>
        <th>Text</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map((item) => (
          <tr key={item.id}>
            <th>{item.text}</th>
            <td>
              <div className="buttons">
                <button
                  class="button is-success"
                  onClick={() => {
                    props.editRow(item);
                  }}
                  disabled={props.isEditing}
                >
                  <span>Edit</span>
                </button>
                <button
                  className="button is-danger"
                  onClick={() => props.deleteUser(item.id)}
                  disabled={props.isEditing}
                >
                  <span>Delete</span>
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No items</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ItemTable;
