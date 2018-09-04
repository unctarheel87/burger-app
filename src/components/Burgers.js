import React from 'react'

export const Burgers = (props) => {
  const burgerList = props.burgers.map((burger) => {
    if(burger.devoured === 0) {
      return (
        <div className="burger-card">
          <div className="card">
            <p>{burger.burger_name}</p>
          </div>  
          <button className="waves-effect waves-light btn red lighten-2 update-burger-btn"
                  onClick={(e) => {
                    props.updateBurger(e, burger.id)
                  }}
          ><i class="material-icons left">local_dining</i>Devour It!</button>
        </div>
      )
    }
  });
  const devouredBurgers = props.burgers.map((burger) => {
    if(burger.devoured === 1) {
      return (
        <div className="card devoured">
          <p>{burger.burger_name}</p>
          <button className="delete-burger-btn" onClick={(e) => {
            props.deleteBurger(e, burger.id)
          }}
          >X</button>
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