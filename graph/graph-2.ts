type FriendNetwork2 = {
    [key: string]: string[]
}

const friendNetwork2: FriendNetwork2 = {
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David'],
    'Charlie': ['Alice', 'David', 'Eve'],
    'David': ['Bob', 'Charlie'],
    'Eve': ['Charlie']
}

// We want to find a particular person, this is Target
// let's make a copy of our original group of people, we'll call that toCheck
// let's create another group where we keep track of who we checked already, we'll call that checked
// Let's check each person one at a time, let's call this person Current
// if Current is not who we are looking for, we add move them from toCheck to Checked
// we keep going until current === target

// how do we check if one person is target?
// how do we reach people in a network?

const isTargetPresent = (graph: FriendNetwork2, target: string): string => {
    const toCheck: string[] = []
    const checked: string[] = []
    let status: string = ''

    for (const person in graph) {
        if (!person) return status = 'person not there'
        if (person === target) return status = 'person found'
        else checked.push(person)
    }
    return status
}

console.log(isTargetPresent(friendNetwork2, 'Alice'))