"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
console.log(data_1.band);
console.log(data_1.band.members.current[0]);
console.log(data_1.band.members.past[data_1.band.members.past.length - 1]);
var allMembers = data_1.band.members.current.concat(data_1.band.members.past);
for (var i = 0; i < allMembers.length; i++) {
    console.log(allMembers[i].name.toLowerCase());
}
