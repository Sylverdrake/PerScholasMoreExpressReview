import React from "react";

function New() {
return (
    <div>
    <form action="/monsters" method="POST">
        Name: <input type="text" name="name" />
        <br/>
        Size: <input type='text' name='size'/>
        <br/>
        Species: <input type="text" name="species" />
        <br/>
        Description: <input type='text' name='description'/>
        <br/>
        Icon: <input type='text' name='icon'/>
        <br/>
        Art: <input type='text' name='art'/>
        <br/>
        Theme: <input type='text' name='icon'/>
        <br/>
        <input type="submit" name="" value="Add monster" />
    </form>
    </div>
);
}

export default New;
