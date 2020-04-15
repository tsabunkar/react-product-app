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

  // react pass the props to the constructor
  constructor(props) {
    // ES6 Rule, if you extend a base class, you should call base class constructor
    super(props); // passing to parent (passing props assign ==> this.props = props)
    console.log('counter props in constructor', props);

    // state: Component internal data
    // helps to mutate -> The data can be changed/updated
    // components own data
    // its attached with compo instance, this.state , should be object type {}
    // state -> Keyword
    this.state = {
      counter: this.props.startValue, // mutate, initialize state from props, first time
      name: 'React Course Registration',
      flag: true,
    }; // state has many life cycle events, when the state should be update
    // component data should go into state not like below

    // this.name = 'Tejas'; // BAD Practice
  }

  // !Events
  // es5 bind
  // es6 next/stage 2
  // this in context
  // safe for event
  // ! WARNING: Contains bad practice
  increment = () => {
    // if the we don't use arrow function, if we use normal func then we get undefined
    console.log('increment called before', this.state.counter);

    // !BAD Practice // mutating state directly
    this.state.counter++; // React V.DOMs are stateless, no data binding-> If we want to render, UI should be referesed
    this.render(); // NO USE we get v.dom ? --> But we should not call render,
    // rather tell to react that we have updated UI, my model data got changed
    // !In angular have dirty checking, zonejs, it got state -> Also react doen't tract data changes
    // REACT is VIEW, its not Model or Controller

    // to tell react to call render function, This will be async call (React has internal, event loops)
    // react will eventually call render but will not call immediately
    // this should not be used, use when limited use scenario --> Also BAD Practice
    this.forceUpdate(); // forceUpdate() -> keword, will not go through shouldComponentUpdate()

    console.log('increment called After', this.state.counter);
  };

  // !GOOD practice to manage the sate
  decrement = () => {
    console.log('decrement called Before', this.state.counter);

    //setate <- keyword (coming from React.Comonent)
    // update the state
    // async
    // eventuall it will update the state, not immediately
    // will set the state, tell react to cal render function
    // setState will take new state. merge with current state, eventually become new state
    // queue it for batch update
    this.setState({
      //key:value

      // update exisiting one
      counter: this.state.counter - 1, //this.state.counter-- <- should not do bcoz - mutable
      // set new state attribute OK
      isProgress: true,
    });

    console.log('decrement called After', this.state.counter);
  };

  // mandatory, called by react
  // whenever render called, we are creating vdom, return vdom
  // for real dom, it patches only what is changed
  render() {
    // how the class component instance will recieve props ?
    // this.props <-- is keyword
    console.log('Counter render props', this.props);
    console.log('Counter render state', this.state);
    return (
      <div>
        <h2>Counter</h2>
        <p>Start Counter Value Props: {this.props.startValue}</p>

        <p>Counter State {this.state.counter}</p>
        {/* onClick is react event, note- react has event loop, 
        render is assoicated with event loop */}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

// ES5 way,similar to functional component
//Counter.propTypes = {}
// Counter.defaultValues  = {}

export default Counter;
//! we can put class/functional component into class/functional Component
