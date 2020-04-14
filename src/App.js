// Naming Convention of Comoponent should be Caps

import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

// this function is called by React
// create v.dom and return v.dom
// APplications is a component (Top most parent compo or root component)

// !Component Compoistion (Reusing the component)
// ! App Component contains Header Component
// ! if App Compoent destroyed, Header/Children compo will also be destroyed
// ! App -> Parent Comp, Header -> Child compo of App
function App() {
  // Alaways will be called immutable
  console.log('App Render');
  return (
    <div>
      {/* <h2>React App</h2> */}
      <Header />
      <Home />
      <Footer
        year={2020}
        company="Airbus"
        isOpen={true}
        isVal
        branches={['IN', 'USA', 'UK']}
        address={{ city: 'Bangalore', state: 'KA' }}
      />
    </div>
  );
}

// isVal -> Value not passed then its default value is true
// branches- array
// address - object

export default App; // Exporting the function
