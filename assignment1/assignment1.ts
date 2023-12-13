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

type Band = {
    members: {
        current: Member[]
        past: Member[]
    }
}

type Member = {
    name: string
    age: number
    plays: string[]
}

function modifyData(band: Band) {
    const currentMembers = band.members.current.map((member) => {
        return("Name: " + member.name + ", Age: " + member.age + ", Plays: " + member.plays)
    })

    const pastMembers = band.members.past.map((member) => {
        return("Name: " + member.name + ", Age: " + member.age + ", Plays: " + member.plays)
    })

    const expected = {
        members: {
            current: currentMembers,
            past: pastMembers
        }
    }

    return expected;
}

const output = modifyData(band)
console.log(output)