type FriendNetwork4 = {
    [key: string]: string[]
}

const friendNetwork4: FriendNetwork4 = {
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David'],
    'Charlie': ['Alice', 'David', 'Eve'],
    'David': ['Bob', 'Charlie'],
    'Eve': ['Charlie']
}

// we want to check if two people are directly related in a network even if it's through friends of friends
// start from a single person
// look at all their friends
// look at their friends' friends
// keep going until we looked at everyone in their netwtork or didn't find a link

const isReachable = (graph: FriendNetwork4, start: string, target: string): boolean => {

    const checked: string[] = []
    const toCheck: string[] = [start]

    while (toCheck.length > 0) {

        const currentPerson = toCheck.shift()! // this take the first person from the toCheck array and stores it in currentPerson

        if (currentPerson === target) return true // if this is true we verified that the target is reachable
        checked.push(currentPerson) // if currentPerson was not the target, we mark them as checked
        const friends = graph[currentPerson]
        const uncheckedFriends = friends.filter(friend => !checked.includes(friend)) // removes friends who have already been checked
        toCheck.push(...uncheckedFriends)
    }
    return false
}

console.log(isReachable(friendNetwork4, 'Alice', 'Charlie'));
