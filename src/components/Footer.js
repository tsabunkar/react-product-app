import React from 'react';

// functional compo shall recieve props as function argument, notably 1st argument ==> This
// We can define as props (Parent-  is giving to child)
// ! props is an object

// <Footer year={2020} company="Airbus" />
// o/p- {year: 2020, company: "Airbus"}
function Footer(props) {
  console.log('Footer props', props, typeof props);
  return (
    <div>
      <hr />
      Tejas Sabunkar is working in {props.company} Copyright @{props.year}
      {props.isVal ? <p>Open</p> : <p>Closed</p>}
      {
        /* We cannot write for loop, instead use maps to iterate over Array*/
        props.branches.map((name) => (
          <span>{name} &nbsp; </span>
        ))
      }
    </div>
  );
}

export default Footer;
