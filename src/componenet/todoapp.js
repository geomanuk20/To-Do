import React, { Component } from 'react';
import "./todoapp.css";


class TodoApp extends Component {
  state = {
    input: "",
    items: [],
    date: new Date().toLocaleDateString('en-US', {
      weekday: 'long', 
      day: 'numeric',
      month: 'long'
    }),
    editIndex: null,
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  storeItems = (event) => {
    event.preventDefault();
    const { input, items, editIndex } = this.state;
    
    if (input.trim()) {
      if (editIndex !== null) {
        // Edit mode: update the item
        const updatedItems = items.map((item, index) => 
          index === editIndex ? input : item
        );
        this.setState({
          items: updatedItems,
          input: "",
          editIndex: null, // Reset editIndex after updating
        });
      } else {
        // Add mode: add a new item
        this.setState(prevState => ({
          items: [...prevState.items, input],
          input: ""
        }));
      }
    }
  }
  editItem = (index) => {
    this.setState({
      input: this.state.items[index],
      editIndex: index // Set editIndex to the index of the item being edited
    });
  }
  

  deleteItem = (key) => {
    this.setState(prevState => ({
      items: prevState.items.filter((data, index) => index !== key)
    }));
  }

  render() {
    const { input, items,date,editIndex } = this.state;
    return (
      <div className='todo-container'>
        <form className='input-section' onSubmit={this.storeItems}>
          <h1>My Day</h1>
          <p id='date'>{date}</p>
          <input 
            type="text" 
            value={input} 
            onChange={this.handleChange} 
            placeholder='Enter items...' 
            required
          />
          <button type="submit">
          {editIndex !== null ? "Update Item" : "Add Item"}
        </button>
        </form>
        <div id='todocont'>
        <ul>
          {items.map((data, index) => (
            <li id='line' key={index}>
              {data}
              <button id='first'><i class="fa-solid fa-pen-to-square" onClick={()=> this.editItem(index)}></i></button>
              <button id='second'> <i className="fa-solid fa-trash-can" onClick={() => this.deleteItem(index)}></i></button>
            </li>
          ))}
        </ul>
        </div>
      </div>
    );
  }
}

export default TodoApp;
