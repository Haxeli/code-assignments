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

function modifyData(band: Band) {
    const currentMembers = band.members.current
    const pastMembers = band.members.past
    const allMembers: string[] = []
    const plays: Record<string, string[]> = {}

    currentMembers.map((member) => {
        const nameLowercase = member.name.toLowerCase()
        allMembers.push(nameLowercase)
    })

    pastMembers.map((member) => {
        const nameLowercase = member.name.toLowerCase()
        allMembers.push(nameLowercase)
    })

    const sortedAllMembers = allMembers.sort()

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