import React from 'react'

export const Burgers = (props) => {
  const burgerList = props.burgers.map((burger) => {
    if(burger.devoured === 0) {
      return (
        <div className="burger-card">
          <p>{burger.burger_name} {burger.devoured}</p>
          <button onClick={(e, burger_id) => {
            props.updateBurger(e, burger.id)
            }}
          >Devour It</button>
        </div>
      )
    }
  });
  const devouredBurgers = props.burgers.map((burger) => {
    if(burger.devoured === 1) {
      return (
        <div className="burger-card">
          <p>{burger.burger_name}</p>
          <button onClick={(e, burger_id) => {
            props.updateBurger(e, burger.id)
            }}
          >Devour It</button>
        </div>
      )
    }
  });
  return (
    <div className="burger-container">  
      <div className="burger-list">
        {burgerList}
      </div>
      <div className="devoured-burgers">
        {devouredBurgers}
      </div>
    </div> 
  );
}