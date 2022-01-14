import React, { useState } from 'react';

const CreateItemForm = (props) => {
  const initialFormState = { id: null, text: '' };
  const [item, setItem] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  return (
    <form
      className="panel is-success"
      onSubmit={(event) => {
        event.preventDefault();
        if (!item.text) return;
        props.addItem(item);
        setItem(initialFormState);
      }}
    >
      <p className="panel-heading">Add Text Here</p>
      <div className="panel-block">
        <p className="mr-2">
          <input
            className="input is-success"
            type="text"
            placeholder="type here"
            value={item.text}
            name="text"
            onChange={handleInputChange}
          />
        </p>
        <div class="buttons">
          <button class="button is-success">
            <span>Add</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateItemForm;
