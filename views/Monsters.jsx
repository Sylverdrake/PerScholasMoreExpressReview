import React from 'react'

function Monsters(props) {
const monster = props.monsters;
return (
    <div>
    <div className='navBar'>
    <nav><a href='http://localhost:3000/'>Home</a></nav>
    </div>
    <div><a href='/monsters/new'>Add a New Monster</a></div>

{monster.map((monster, i) => {
return (
<div key={i}>
    <a href={`/monsters/${monster._id}`}>
    <h2><img src={monster.icon}alt=''/>{monster.name}</h2>

    </a>

<a href={`/monsters/${monster._id}/edit`}>Edit This monster</a>

<form action={`/monsters/${monster._id}?_method=DELETE`} method="POST"  >
<input type="submit" value="DELETE"/>
</form>
</div>
);
})}
</div>
);
}
export default Monsters