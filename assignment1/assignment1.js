"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
/*
console.log(band)
console.log(band.members.current[0])
console.log(band.members.past[band.members.past.length - 1])

let allMembers = band.members.current.concat(band.members.past)
for (var i = 0; i < allMembers.length; i++) {
    console.log(allMembers[i].name.toLowerCase())
}
*/
function modifyData(band) {
    var currentMembers = band.members.current.map(function (member) {
        return member.name.toLowerCase();
    });
    var expected = {
        members: {
            current: currentMembers
        }
    };
    return expected;
}
var output = modifyData(data_1.band);
console.log(output);
