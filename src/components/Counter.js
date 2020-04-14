// Class Component
// Class v/s Function Component

import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ! if the component class, react will create instance for the class automtically
// ! Component is a component class instance -> React will create object

// class Counter extends Component {
class Counter extends React.Component {
  // react keyword
  // called by react lib
  // create and return v.doms
  // mandatory should call -> render() {}

  // ES.NEXT, safe to use-> ES Stage 2
  // possible only in class component
  static propTypes = {
    startValue: PropTypes.number, //optional
  };

  // !default values, when parent compo didn't give the value
  static defaultProps = {
    startValue: 0,
  };

  render() {
    // how the class component instance will recieve props ?
    // this.props <-- is keyword
    console.log('Counter render', this.props);
    return (
      <div>
        <h2>Counter</h2>
        <p>Start Counter Value : {this.props.startValue}</p>
      </div>
    );
  }
}

// ES5 way,similar to functional component
//Counter.propTypes = {}
// Counter.defaultValues  = {}

export default Counter;
//! we can put class/functional component into class/functional Component
