// mandatory  whenever JSX is used
import React from 'react';

// babel convert your code into React.createElement

// HigherOrder Component -> HOF
// !Function name should upper case for Component function
//  !Function name is not caps --> then JSX issue/convention
function Header() {
  return (
    <div>
      <h2>React App</h2>
      <hr />
    </div>
  );
}

export default Header;
