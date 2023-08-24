import React from "react";

function Edit(props) 
{
const monster = props.monsters
return (
    <div>
    <form action={`/monsters/${monster._id}?_method=PUT`} method="POST">
        Name:{" "}
        <input type="text" name="name" defaultValue={monster.name} />
        <br/>
        Size:{" "}
        <input type="text" name="size" defaultValue={monster.size} />
        <br/>
        Species:{" "}
        <input type="text" name="species" defaultValue={monster.species} />
        <br/>
        Description:{" "}
        <input type="text" name="description" defaultValue={monster.description} />
        <br/>
        Icon:{" "}
        <input type="text" name="icon" defaultValue={monster.icon} />
        <br/>
        Art:{" "}
        <input type="text" name="art" defaultValue={monster.art} />
        <br/>
        Theme:{" "}
        <input type="text" name="theme" defaultValue={monster.theme} />
        <br/>
        <input type="submit" value="Submit Changes"/>
    </form>
    </div>
);
}

export default Edit;