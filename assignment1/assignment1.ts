import { band } from "./data"

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
    const currentMembers = band.members.current.map((member) => {
        return member.name
    })

    const expected = {
        members: {
            current: currentMembers
        }
    }

    return expected;
}

const output = modifyData(band)
console.log(output)