import { ItemList } from "./ItemList.jsx"

import "bulma/css/bulma.min.css"

function App() {
  return (
    <section className="section">
      <div className="box">
        <h1 className="title">Item List with Add, Edit and Remove</h1>
        <p>Open <code>ItemList.jsx</code> and implement your component named <code>ItemList</code>.</p>
      </div>

      <h3 className="title is-4">Task</h3>
      <div className="content">
        <p>Create a list of text items, with add, edit and remove functionality:</p>
        <ul>
          <li>Start the list empty.</li>
          <li>The last item in the list is a text field where you can enter free text.</li>
          <li>When the text field is submitted (either with a button or by pressing enter), the text in the field is added to the list as a new item.</li>
          <li>Display each of the items as a separate paragraph when added.</li>
          <li>When you hover over a list item, two buttons appear to the left of it - a delete button and an edit button.</li>
          <li>Pressing the delete button asks for confirmation and then removes the item from the list.</li>
          <li>Pressing the edit button turns the list item back into a text field, and when that field is submitted (either with a button or by pressing enter) it updates the list item.</li>
        </ul>
        <p>Use <code>bulma</code> classes for styling - the library is included in the bundle already.</p>
      </div>

      <h3 className="title is-4">Test</h3>
      <ItemList />
    </section>
  )
}

export default App
