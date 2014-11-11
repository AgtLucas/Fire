var React = require('react');
var ReactFireMixin = require('reactfire');
var TodoList = require('./todolist');

var TodoApp = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {items: [], text: ""};
  },

  componentWillMount: function () {
    var firebaseRef = new Firebase('https://ReactFireTodoApp.firebaseio.com/items/');
    this.bindAsArray(firebaseRef.limitToLast(25), 'items');
  },

  onChange: function (e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    if (this.state.text && this.state.text.trim() !== 0) {
      this.firebaseRef['items'].push({
        text: this.state.text
      });
      this.setState({text: ""});
    }
  }
})