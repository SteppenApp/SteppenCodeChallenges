import React, { useState } from 'react';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const TwoPaneList = ({ data }) => {
  const initialState = { title: '', content: [] };
  const [selected, setSelected] = useState(initialState);

  const selectTitle = (item) => {
    setSelected(item);
  };

  return (
    <div className="columns is-mobile">
      <LeftPane data={data} selectTitle={selectTitle} />
      <RightPane data={data} selected={selected} />
    </div>
  );
};

export default TwoPaneList;
