"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
function modifyData(band) {
    var currentMembers = band.members.current.map(function (member) {
        return ("Name: " + member.name + ", Age: " + member.age + ", Plays: " + member.plays);
    });
    var pastMembers = band.members.past.map(function (member) {
        return ("Name: " + member.name + ", Age: " + member.age + ", Plays: " + member.plays);
    });
    var expected = {
        members: {
            current: currentMembers,
            past: pastMembers
        }
    };
    return expected;
}
var output = modifyData(data_1.band);
console.log(output);
