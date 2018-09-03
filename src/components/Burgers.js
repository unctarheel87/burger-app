import React from 'react'

export const Burgers = (props) => {
  const burgerList = props.burgers.map((burger) => {
    return (
      <div>
        <h2>{burger.burger_name} {burger.devoured}</h2>
        <button onClick={(e, burger_id) => {
          props.updateBurger(e, burger.id)
          }}
        >Devour It</button>
      </div>
    )
  });
  return (
    <div>
      {burgerList}
    </div>
  );
}