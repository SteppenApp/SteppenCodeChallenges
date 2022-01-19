import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {
  const [item, setItem] = useState(props.currentItem);

  useEffect(() => {
    setItem(props.currentItem);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  return (
    <form
      className="panel is-success"
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(item.id, item);
      }}
    >
      <p className="panel-heading">Update Text Here</p>
      <div className="panel-block">
        <div className="field is-grouped">
          <p className="mr-2">
            <input
              className="input is-success"
              type="text"
              name="text"
              value={item.text}
              onChange={handleInputChange}
            />
          </p>
          <div className="buttons">
            <button class="button is-success">
              <span>Update</span>
            </button>
            <button
              className="button is-light"
              onClick={() => props.setEditing(false)}
            >
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditUserForm;
