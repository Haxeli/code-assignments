"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
function findMember(members, name) {
    for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
        var member = members_1[_i];
        if (member.name.toLowerCase() === name.toLowerCase()) {
            return member;
        }
    }
    return undefined;
}
function modifyData(band) {
    var currentMembers = band.members.current;
    var pastMembers = band.members.past;
    var allMembers = [];
    var plays = {};
    currentMembers.map(function (member) {
        var lowercaseName = member.name.toLowerCase();
        allMembers.push(lowercaseName);
    });
    pastMembers.map(function (member) {
        var lowercaseName = member.name.toLowerCase();
        allMembers.push(lowercaseName);
    });
    var sortedAllMembers = allMembers
        .sort(function (a, b) {
        var memberA = findMember(band.members.current.concat(band.members.past), a);
        var memberB = findMember(band.members.current.concat(band.members.past), b);
        if (memberA && memberB) {
            if (memberA.age !== memberB.age) {
                return memberB.age - memberA.age;
            }
            return a.localeCompare(b);
        }
        return 0;
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
