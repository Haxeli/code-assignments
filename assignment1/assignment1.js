"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
function modifyData(band) {
    var currentMembers = band.members.current;
    var pastMembers = band.members.past;
    var allMembers = [];
    var plays = {};
    currentMembers.map(function (member) {
        var nameLowercase = member.name.toLowerCase();
        allMembers.push(nameLowercase);
    });
    pastMembers.map(function (member) {
        var nameLowercase = member.name.toLowerCase();
        allMembers.push(nameLowercase);
    });
    var sortedAllMembers = allMembers.sort();
    var expected = {
        members: {
            current: currentMembers,
            past: pastMembers,
            all: sortedAllMembers
        },
        plays: plays
    };
    return expected;
}
var output = modifyData(data_1.band);
console.log(output);
