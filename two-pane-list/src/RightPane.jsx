import React from 'react';

const RightPane = (props) => {
  return (
    <aside className="menu column is-half">
      <p className="menu-label">Content</p>
      <ul className="menu-list">
        {props.selected.content.length > 0 ? (
          props.selected.content.map((cont, index) => (
            <li className="mb-2" key={index}>
              <a>{cont}</a>
            </li>
          ))
        ) : (
          <li>
            <a>Please select Title</a>
          </li>
        )}
      </ul>
    </aside>
  );
};

export default RightPane;
