import React from 'react';

//  JSX - js + XML
// It is not full js, not full XML
// <!--- comments --> <= HTML COMMENTS (not work in JSX)
// Inside JSX => {}  --> Expression, any valid js expression
// in jsx no single line comments, Only multiple line comments

// !In JSX- True/false have some special symmentics
// We cannot write statements inside JSX -if else, while, for, ...

// !JSX only allows expression
function Home() {
  return (
    <div>
      {/* Comments in JSX*/}
      <p>Welcome to Product Store</p>
      <p>Number: 10</p>
      <p>number expression : {10 + 5}</p>
      <p> fun call : {add(10, 30)}</p>
      <p>Boolean True: {true}</p>
      <p>Boolean False: {false}</p>
      <p>{'Tejas' + 'Sabunkar'}</p>
      {/*  <p>
          {
              if(true)
              console.log('tejas'); <-- !ERROR
          }
      </p> */}

      {
        /*  To writ if confition */
        true && <p>Even Number</p>
      }

      {10 % 2 === 0 && <p>I am even</p>}

      {
        //   Ternary operator
        10 % 2 === 0 ? <p>Even</p> : <p>Odd</p>
      }

      {
        //   Ternary operator
        9 % 2 === 0 ? <p>Even</p> : <p>Odd</p>
      }
    </div>
  );
}

function add(a, b) {
  return a + b;
}

export default Home;
