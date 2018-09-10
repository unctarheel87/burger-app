import React from 'react'

export const Toppings = (props) => {
  return (
    <ul>
      {props.toppings.map((topping) => {
        return <li>{topping}</li>
      })}
    </ul>
  );
}