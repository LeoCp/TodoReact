var App = React.createClass({
  getInitialState: function (){
    return {
      todos:[
        {id:1,name:"Leonardo"},
        {id:2,name:"Neide"},
        {id:3,name:"Nathalia"}
      ]
    }

  },
  render: function () {
    return(
      <div className="jumbotron">
      <h1>Todo</h1>
      <TodoForm addTodo={this.handleAddTodo}/><br/>
      <TodoList todos={this.state.todos} deleteTodo={this.handleDeleteTodo}/>
      </div>
    );
  },
  handleAddTodo: function (value) {
    console.log("Adicionando " + value);
    var obj = {
      id:this.state.todos.length + 1,
      name : value
    };
    this.setState({todos:this.state.todos.concat(obj)})
  },
  handleDeleteTodo: function (obj) {
    //code
    console.log(obj.name + " deletado!");
  }
});

//TodoForm
var TodoForm = React.createClass({
  render: function () {
    return(
      <form onSubmit={this.onSubmit}>
      <input type="text" ref="name" className="form-control" placeholder="Enter todo"/>
      </form>
    )
  },
  onSubmit: function (e) {
    e.preventDefault();
    var value = this.refs.name.value;
    if (!value) {
      console.log("??");
      return;
    }else{
      this.props.addTodo(this.refs.name.value);
    }
  }
});

//TodoList
var TodoList = React.createClass({
  render: function () {
    return(
      <ul className="list-group">
      {
        this.props.todos.map(todo => {
          return <li key={todo.id} className="list-group-item"><button onClick={this.onDelete.bind(this,todo)}className="label label-default label-pill pull-xs-right close">&times;</button>
          {todo.name}</li>
        })
      }
      </ul>
    )
  },
  onDelete: function (todo) {
    console.log("Deletenado " + todo.name);
    this.props.deleteTodo(todo);
  }
});

ReactDOM.render(<App/>,document.getElementById("app"))
