var React = require('react');
var ReactFireMixin = require('reactfire');
var TodoList = require('./todolist');

var TodoApp = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {items: [], text: ""};
  },
})