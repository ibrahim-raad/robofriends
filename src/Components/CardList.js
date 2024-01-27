import React from "react";
import Card from './card';



const CardList = ({Robots}) => {
  // if(true) {
  //   throw new Error('nooo!');
  // }
    
    return (
    <div>
      {
            Robots.map((user, i) => {
            return(
            <Card key={i}
            id={Robots[i].id}
            name={Robots[i].name}
            email={Robots[i].email}
            />
            )
        })
      } 
    </div>
  )
}

export default CardList;