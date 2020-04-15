// Naming Convention of Comoponent should be Caps

import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Counter from './components/Counter';
import Calc from './components/Calc';

// this function is called by React
// create v.dom and return v.dom
// APplications is a component (Top most parent compo or root component)

// !Component Compoistion (Reusing the component)
// ! App Component contains Header Component
// ! if App Compoent destroyed, Header/Children compo will also be destroyed
// ! App -> Parent Comp, Header, Footer -> Child compo of App
//! we can put class/functional component into class/functional Component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: 0,
    };
  }

  // !PASSING Data from PARENT Comp to CHILD Comp
  // define function in the parent component
  // pass the function as a callback through props to child component
  reset = () => {
    console.log('reset called by child');

    this.setState({
      startValue: 0,
    });
  };

  submit = (value) => {
    console.log('called by child ', value);
    this.setState({
      startValue: value,
    });
  };

  render() {
    // Alaways will be called immutable
    console.log('App Render');
    return (
      <div>
        {/* <h2>React App</h2> */}
        <Header />
        <p>App Parent startValue {this.state.startValue}</p>

        <Counter
          startValue={this.state.startValue}
          reset={this.reset}
          submit={this.submit}
        />

        {/* <Counter startValue={this.state.startValue} /> */}
        <Calc />
        {/* <Counter /> */}
        <Home />
        <Footer
          year={2020}
          // year={'2020'}
          company="Airbus"
          isOpen={true}
          isVal
          branches={['IN', 'USA', 'UK']}
          address={{ city: 'Bangalore', state: 'KA', pincode: 500026 }}
          addresses={{
            headOffice: { city: 'Bangalore', state: 'KA' },
            branchOffice: { city: 'Bangalore', state: 'KA' },
          }}
        />
      </div>
    );
  }
}

// year, company, ... ==> All are props/property
// isVal -> Value not passed then its default value is true
// branches- array
// address - object

// ! year={'2020'} should be number, you will get warning --> PropTypes
// address={{  state: 'KA', pincode: 500026 }} ==>  should define a propertty city property

export default App; // Exporting the function
