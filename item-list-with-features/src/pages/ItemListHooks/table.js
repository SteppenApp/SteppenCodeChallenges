import React, { useState } from 'react';

const ItemTable = (props) => {
  const [showAction, setShowAction] = useState(false);

  const onHover = (e) => {
    setTimeout(setShowAction(true), 1000);
  };

  const onLeave = (e) => {
    setTimeout(setShowAction(false), 1000);
  };

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
            <tr key={item.id} onMouseOver={onHover} onMouseLeave={onLeave}>
              <td>
                <div className="buttons">
                  <button
                    className="button is-success"
                    onClick={() => {
                      props.editRow(item);
                    }}
                    disabled={props.isEditing || !showAction}
                  >
                    <span>Edit</span>
                  </button>
                  <button
                    className="button is-danger"
                    onClick={() => props.deleteUser(item.id)}
                    disabled={props.isEditing || !showAction}
                    hidden={props.isEditing || showAction}
                  >
                    <span>Delete</span>
                  </button>
                </div>
              </td>

              <th>{item.text}</th>
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
};

export default ItemTable;
