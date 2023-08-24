import React from "react";

function Show(props) {
const monster = props.monsters;
return (
    <div>
    <nav><a href='http://localhost:3000/monsters'>Back</a></nav>
    <h1>{monster.name}</h1>
    <div className="imgContainer"><img src={monster.art}/></div>
    <h3>
        {" "}
        {monster.name} is {monster.size} and a {monster.species}.
        {monster.theme}
    </h3>

    <h4>
        {monster.description}
    </h4>
    </div>
);
}

export default Show;
