import React, { Component } from 'react';

class Calc extends Component {
  constructor(props) {
    super(props);
    // State possible only in class compo, not functional component
    this.state = {
      a: 0,
      b: 0,
      result: 0,
    };
  }

  // ! dependent setState issues/solutions
  // soln: we have solved using setState callback, but it has
  // CON: calls render again from callback
  // render called twice
  incrementA = () => {
    // !within the same event execution/callstack, you can setState as many times
    // !render called only one

    console.log('IncrementA before', this.state);
    // change the value of a, then do something to update result in second step
    this.setState(
      {
        a: this.state.a + 1,
        // result: this.state.b + this.state.a + 1, // second setState to update (not doin this way)
      },
      () => {
        // callback, called after the state attributes merged,
        // update current state,
        // called after render

        // we can see the update state
        console.log('incrementA setState Callback', this.state);

        console.log('increment A result setState');
        // work for the dependent setState
        // CON: calls the render function again
        // callback is invoked on separate callstack
        this.setState({
          result: this.state.a + this.state.b,
        });
      }
    );

    // Change the result

    // BUG, will not work, bcoz - this.state.a is not yet updated, due to async
    /*   this.setState({
      result: this.state.a + this.state.b,
    }); */
    // this wil not work -> use setState callback (don't use much)

    // change the result
    console.log('IncrementA After', this.state);
  };

  // solve the dependent setState
  // !using React FUNCTIONAL setState  GOOD Practice
  incrementB = () => {
    console.log('IncrementB before', this.state);

    // setState will take a callback as first argum instead of object,
    // NOT BE Confused with previous callback
    // the fun shall be called by react
    // prevState is passed as input, first parameter
    // returns a new state
    // async function, meams, the new state eventually merged with current state, later
    // function provided is not invoked in the same event cycle, will be called event loop
    // invoked before render function call, at the end of the event loop
    this.setState((prevState) => {
      console.log('functional setState prevState', prevState);
      return {
        b: prevState.b + 1,
      };
    });

    // result of prev function setState is passed as input here
    // end result shall be merged with current state -> To become new state
    this.setState((prevState) => {
      console.log('Second callback setState', prevState);
      return {
        result: prevState.a + prevState.b,
      };
    });

    console.log('IncrementB After', this.state);
  };

  // the first argument is an event object
  // preventDefault, stopPropogation -> Stop event bubble up
  // !synthetic event, event pool, react is using the event object called proxy pattern
  reset = (event) => {
    console.log('Reset ', event);

    this.setState({
      a: 0,
      b: 0,
      result: 0,
    });

    console.trace(); // not use in cross browser, print callstatck
  };

  divClick = (event) => {
    console.log('divClicked ', event);
    console.trace();

    this.setState({
      flag: true,
    });
  };

  render() {
    console.log('Calc render', this.state);

    return (
      <div>
        <h2>Calc</h2>

        <p>A : {this.state.a}</p>
        <p>B : {this.state.b}</p>
        <p>Result: {this.state.result}</p>
        <button onClick={this.incrementA}>Incr A</button>
        <button onClick={this.incrementB}>Incr B</button>
        <div onClick={this.divClick}>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Calc;
