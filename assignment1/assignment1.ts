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

    const expected: Expected = {
        members: {
            current: currentMembers,
            past: pastMembers,
            all: allMembers
        },
        plays: plays
    }

    return expected;
}

const output = modifyData(band)
console.log(output)