import { band } from "./data"

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

type Expected = {
    members: {
        current: Member[]
        past: Member[]
        all: string[]
    }
    plays: Record<string, string[]>
}

function findMember(members: Member[], name: string): Member | undefined {
    for (const member of members) {
        if (member.name.toLowerCase() === name.toLowerCase()) {
            return member;
        }
    }
    return undefined;
  }

function modifyData(band: Band) {
    const currentMembers = band.members.current
    const pastMembers = band.members.past
    const allMembers: string[] = []
    const plays: Record<string, string[]> = {}

    currentMembers.map((member) => {
        const lowercaseName = member.name.toLowerCase()
        allMembers.push(lowercaseName)
    })

    pastMembers.map((member) => {
        const lowercaseName = member.name.toLowerCase()
        allMembers.push(lowercaseName)
    })

    const sortedAllMembers = allMembers
    .sort((a, b) => {
        const memberA = findMember(band.members.current.concat(band.members.past), a)
        const memberB = findMember(band.members.current.concat(band.members.past), b)

        if (memberA && memberB) {
            if (memberA.age !== memberB.age) {
                return memberB.age - memberA.age
            }
            return a.localeCompare(b)
        }

        return 0
    })

    band.members.current.concat(band.members.past).forEach((member) => {
        member.plays.forEach((play) => {
            if(!plays[play]) {
                plays[play] = []
            }
            plays[play].push(member.name.toLowerCase())
        })
    })

    const expected: Expected = {
        members: {
            current: currentMembers,
            past: pastMembers,
            all: sortedAllMembers
        },
        plays: plays
    }

    return expected;
}

const output = modifyData(band)
console.log(output)