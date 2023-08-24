//Requirements =================
const methodOverride = require('method-override');
const express = require("express");
const app = express();
const PORT = 3000;

require("dotenv").config();

const mongoose = require("mongoose");
const Monsters = require("./models/monsters.js");
const monsters = require ("./utilities/monData.js");

// =================

//MiddleWare =================
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/css'))
//

//Routing Check =================
app.use((req, res, next) => 
{
console.log("I run for all routes");
next();
});
// =================

//Mongoose Connection =================
mongoose.connect(process.env.MONGO_URI, 
{
useNewUrlParser: true,
useUnifiedTopology: true,
});

mongoose.connection.once("open", () => 
{
console.log("Connected to mongo");
});
// =================

//Seed Routes =================
app.get('/monsters/seed', async (req, res) =>
{
    // await Monsters.deleteMany({});
    await Monsters.create(monsters);
    res.redirect('/monsters')
})
//=================

//Routes =================
app.get("/", (req, res) => 
{
    res.render("Home");
});
//=================

//Data =================
//Index
app.get('/monsters', (req, res) =>
{
    Monsters.find({}).then((allMonsters) =>
    {
        res.render('Monsters', 
        {
            monsters: allMonsters,
        });
    });
});

//Post
app.post("/monsters", async (req, res) => 
{
const newMonster = await Monsters.create(req.body);
res.redirect('/monsters');
});

//New
app.get('/monsters/new', (req, res)=>
{
    res.render('New');
});

//Remove
app.delete('/monsters/:id', async (req,res)=>
{
    await Monsters.findByIdAndRemove(req.params.id)
    res.redirect('/monsters')
})

//Update
app.put('/monsters/:id', async(req, res)=>
{
    const updateMonster = await Monsters.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/monsters/${req.params.id}`);
});

//Edit
app.get('/monsters/:id/edit', async(req, res)=>
{
    const foundMonster = await Monsters.findById(req.params.id)
    res.render('Edit',
    {
        monsters: foundMonster
    })
})

//Show
app.get('/monsters/:id', async (req, res)=>
{
    const eachMonster = await Monsters.findById(req.params.id)
    await res.render('Show',
    {
        monsters: eachMonster
    })
})
//=================

//Port =================
app.listen(PORT, (req, res) => {
    console.log(`Listening on 3k`);
    });
    //=================