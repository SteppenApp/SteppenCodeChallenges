import React, { useState } from 'react';
import CreateItem from './CreateItem';
import UpdateItem from './UpdateItem';
import Items from './table';
import { v1 as uuidv1 } from 'uuid';

const ItemList = () => {
  const listData = [];

  const initialFormState = { id: null, text: null };

  // Setting state
  const [items, setItems] = useState(listData);
  const [currentItem, setCurrentItem] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addItem = (item) => {
    item.id = uuidv1();
    setItems([...items, item]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setItems(items.filter((item) => item.id !== id));
  };

  const updateUser = (id, updatedItem) => {
    setEditing(false);
    setItems(items.map((item) => (item.id === id ? updatedItem : item)));
  };

  const editRow = (item) => {
    setCurrentItem({ ...item });
    setEditing(true);
  };

  return (
    <div className="container">
      {editing ? (
        <UpdateItem
          editing={editing}
          setEditing={setEditing}
          currentItem={currentItem}
          updateUser={updateUser}
        />
      ) : (
        <CreateItem addItem={addItem} />
      )}
      <Items
        items={items}
        editRow={editRow}
        deleteUser={deleteUser}
        isEditing={editing}
      />
    </div>
  );
};

export default ItemList;
