import {Component} from 'react';
import ToDoItems from './ToDoItems';

class ToDoList extends Component {
    // state is a container, safe of the class component
    // state is a special reserved keyword

style1 = {
    backgroundColor: 'yellow'
  };
  
    state = {
      inputValue: '',
      todos: [{ToDo: 1, Description: 'Some to do thing one'}, {ToDo: 2, Description: 'Some to do thing two'}]
    };
  
    onChange = (event) =>{
      const value = event.target.value
      // console.log(value)
      this.setState({
        inputValue: value
      })
    }
      // console.log(this.state.inputValue)

      addTodo = (event) => {
        event.preventDefault()
        const ToDo = {
          ToDo: this.state.todos.length + 1,
          Description: this.state.inputValue
        }
        this.setState({
          todos: [...this.state.todos, ToDo],
          inputValue: ''
        })
      }
    
  
    render() {
        return (
            <div className="todos">
                <form onSubmit={this.addTodo} className='todo-form'>
                    <input type='text' onChange={this.onChange}/>
                    <button type='submit'>New To Do</button>
                </form>

                  {this.state.todos.map((ToDo) => (
                    <ToDoItems key={ToDo.ToDo} ToDo={ToDo.ToDo} Description={ToDo.Description} />
                  ))}
            </div>
        )
    }
}

export default ToDoList;