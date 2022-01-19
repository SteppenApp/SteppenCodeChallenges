import React, { useState } from 'react';
import CreateItem from './CreateItem';
import UpdateItem from './UpdateItem';
import Items from './ItemTable';
import { v1 as uuidv1 } from 'uuid';
import { toast } from 'react-toastify';

const ItemList = () => {
  const listData = [];

  const initialFormState = { id: null, text: null };

  const [items, setItems] = useState(listData);
  const [currentItem, setCurrentItem] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addItem = (item) => {
    item.id = uuidv1();
    setItems([...items, item]);
    toast.success(`New item saved`);
  };

  const deleteUser = (id) => {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      setEditing(false);
      setItems(items.filter((item) => item.id !== id));
      toast.success(`item with ID [${id}] successfully deleted`);
    } else {
      toast.info(`Item deletion cancelled`);
    }
  };

  const updateUser = (id, updatedItem) => {
    setEditing(false);
    setItems(items.map((item) => (item.id === id ? updatedItem : item)));
    toast.success(`item [${updatedItem.text}] successfully updated`);
  };

  const editRow = (item) => {
    setCurrentItem({ ...item });
    setEditing(true);
  };

  return (
    <div className="container">
      <Items
        items={items}
        editRow={editRow}
        deleteUser={deleteUser}
        isEditing={editing}
      />
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
    </div>
  );
};

export default ItemList;
