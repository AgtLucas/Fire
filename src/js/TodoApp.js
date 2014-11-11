var React = require('react');
var ReactFireMixin = require('reactfire');
var TodoList = require('./todolist');
var Firebase = require('firebase');

var TodoApp = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {items: [], text: ""};
  },

  componentWillMount: function () {
    var firebaseRef = new Firebase('https://ReactFireTodoApp.firebaseio.com/items/');
    this.bindAsArray(firebaseRef.limitToLast(25), "items");
  },

  onChange: function (e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    if (this.state.text && this.state.text.trim().length !== 0) {
      this.firebaseRefs["items"].push({
        text: this.state.text
      });
      this.setState({text: ""});
    }
  },

  render: function () {
    return (
      <div className="todo-app__container">
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{"Add #" + (this.state.items.length) + 1}</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoApp;