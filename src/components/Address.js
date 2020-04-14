import React from 'react';

// props = {address: {city, state}}
/* We cannot write for loop, instead use maps to iterate over Array*/

function Address(props) {
  return (
    <div>
      <hr />
      <p>Address</p>
      <p>City: {props.address.city}</p>
      <p>State: {props.address.state}</p>
      <hr />
    </div>
  );
}

export default Address;
