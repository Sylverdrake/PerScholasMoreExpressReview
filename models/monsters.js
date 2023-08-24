const mongoose = require('mongoose');

const monsterSchema = new mongoose.Schema({
name:           {type: String, required: true},
size:           {type: String, required: true},
species:        {type: String, required: true},
description:    {type: String, required: true},
icon:           {type: String, required: true},
art:            {type: String, required: true},
theme:          {type: String, required: true},
});

const Monsters = mongoose.model('monsters', monsterSchema);

module.exports = Monsters;