import React from 'react';
import Address from './Address';
// ! As dependencies to react already
import PropTypes from 'prop-types';

// functional compo shall recieve props as function argument, notably 1st argument ==> This
// We can define as props (Parent-  is giving to child)
// ! props is an object

// <Footer year={2020} company="Airbus" />
// o/p- {year: 2020, company: "Airbus"}
function Footer(props) {
  console.log('Footer props', props, typeof props);

  // !BEST PRACTICE

  // *Rule-1) Props are immutable
  // props.year = 2021;
  // wiriting to read only property <=== BAD practice, Data comes from
  // props are owned by parent compo, you should use this the data should not modifiy data
  // Child comp should never modifiy the parent comp data
  //property descriptor

  // props.branches is not immutable (bcoz- Object & Array is not immutable)
  // props.branches.push('AUS') <=== it works but its WORST Practice

  return (
    <div>
      <hr />
      Tejas Sabunkar is working in {props.company.toUpperCase()} Copyright @
      {props.year}
      {props.isVal ? <p>Open</p> : <p>Closed</p>}
      {
        /* We cannot write for loop, instead use maps to iterate over Array*/
        props.branches.map((name) => (
          <span>{name} &nbsp; </span>
        ))
      }
      <Address address={props.address} />
    </div>
  );
}

// ! ES5, static
// ! React keyword -> propTypes
Footer.propTypes = {
  // enforce the datatypes correct
  // enforce the mandatory props

  year: PropTypes.number.isRequired, // datatype and mandatory
  company: PropTypes.string, // string and optional
  branches: PropTypes.array.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    pincode: PropTypes.number,
  }).isRequired,
};

// default, what if parent component doesn't pass the data
// or default/placeholder value to avoid crash/blank UI
// keyword - defaultProps, used when parent doesn't pass the props
Footer.defaultProps = {
  company: 'Mindtree',
};

export default Footer;
