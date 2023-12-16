"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
// The find() function was causing a compiling error so I had to make my own
// This is used to find a member in a Member type array based on the member's name
function findMember(members, name) {
    for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
        var member = members_1[_i];
        if (member.name.toLowerCase() === name.toLowerCase())
            return member;
    }
    return undefined;
}
function modifyData(band) {
    var currentMembers = band.members.current;
    var pastMembers = band.members.past;
    var allMembers = [];
    var plays = {};
    currentMembers.map(function (member) { return allMembers.push(member.name.toLowerCase()); });
    pastMembers.map(function (member) { return allMembers.push(member.name.toLowerCase()); });
    var sortedAllMembers = allMembers
        .sort(function (a, b) {
        var memberA = findMember(band.members.current.concat(band.members.past), a);
        var memberB = findMember(band.members.current.concat(band.members.past), b);
        if (memberA && memberB) {
            // Sorting age first by descending order
            if (memberA.age !== memberB.age)
                return memberB.age - memberA.age;
            // Sorting by name in ascending order if ages are same
            return a.localeCompare(b);
        }
        // Keep the current order if members are not found
        return 0;
    });
    band.members.current.concat(band.members.past).forEach(function (member) {
        member.plays.forEach(function (play) {
            if (!plays[play])
                plays[play] = [];
            plays[play].push(member.name.toLowerCase());
        });
    });
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
