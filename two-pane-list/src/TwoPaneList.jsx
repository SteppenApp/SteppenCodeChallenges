import React, { useState } from 'react';

export const TwoPaneList = ({ data }) => {

  const [selectedContent, setSelectedContent] = useState(null);

  const handleTitleClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="columns">
      <div className="column is-one-third">
        <aside className="menu">
          <ul className="menu-list">
            {data.map((item, index) => (
              <li key={index} onClick={() => handleTitleClick(item.content)}>
                {item.title}
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <div className="column">
        {selectedContent ? (
          selectedContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <p>Click on a title to display its content.</p>
        )}
      </div>
    </div>
  );
};

export default TwoPaneList;