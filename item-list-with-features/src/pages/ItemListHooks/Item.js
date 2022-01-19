import React, { useState } from 'react';

const Item = (props) => {
  const [showAction, setShowAction] = useState(false);
  const onHover = (e) => {
    setTimeout(setShowAction(true), 1000);
  };

  const onLeave = (e) => {
    setTimeout(setShowAction(false), 1000);
  };

  return (
    <tr key={props.item.id} onMouseOver={onHover} onMouseLeave={onLeave}>
      <td>
        <div className="buttons">
          <button
            className="button is-success"
            onClick={() => {
              props.editRow(props.item);
            }}
            disabled={props.isEditing || !showAction}
          >
            <span>Edit</span>
          </button>
          <button
            className="button is-danger"
            onClick={() => props.deleteUser(props.item.id)}
            disabled={props.isEditing || !showAction}
          >
            <span>Delete</span>
          </button>
        </div>
      </td>
      <th>{props.item.text}</th>
    </tr>
  );
};

export default Item;
