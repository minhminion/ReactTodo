import React,{Component} from 'react';
import './App.css';
import AddTodo from './component/AddTodo'
import Todo from './component/Todos'
import uuid from 'uuid'

class App extends Component{
  state = {
      todos: [
        {
          id: uuid.v4(),
          title: "Minh dep trai",
          completed: false,
        },
        {
          id: uuid.v4(),
          title: "Mai day som",
          completed: false,
        },
        {
          id: uuid.v4(),
          title: "Lam bai nop huy",
          completed: false,
        },
      ]
  }

  getStyle = () =>{
    return {
      margin: 'auto',
      width: '60%',
      marginTop: '30px'
    };
  }

  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map(todo => {
          todo.completed = todo.id === id ? !todo.completed : todo.completed;
          return todo
        }
      )
    })
  }

  delTodo = (id) =>{
    this.setState ({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }   

  addTodo = (title) =>{
    const newTodo = {
        id: uuid.v4(),
        title,
        completed : false
    }
    this.setState({ todos : [...this.state.todos , newTodo]})
  }

  render(){
    return (
      <div className="App" style={this.getStyle()}>
        <AddTodo addTodo={this.addTodo}/>
        <Todo todos={ this.state.todos } markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
