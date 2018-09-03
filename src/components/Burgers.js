import React from 'react'

export const Burgers = (props) => {
  const burgerList = props.burgers.map((burger) => {
    return (
      <h2>{burger.burger_name} {burger.devoured}</h2>
    )
  });
  return (
    <div>
      {burgerList}
    </div>
  );
}