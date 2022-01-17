import React from 'react';

const TwoPaneList = (props) => {
  return (
    <aside className="menu column is-auto">
      <p className="menu-label">Title</p>
      <ul className="menu-list">
        {props.data.length > 0 ? (
          props.data.map((item, index) => (
            <li
              className="mb-2"
              key={index}
              onClick={() => {
                props.selectTitle(item);
              }}
            >
              <a>{item.title}</a>
            </li>
          ))
        ) : (
          <li className="mb-2">
            <a>No items</a>
          </li>
        )}
      </ul>
    </aside>
  );
};

export default TwoPaneList;
