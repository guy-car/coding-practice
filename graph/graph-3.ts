type FriendNetwork3 = {
    [key: string]: string[]
}

const friendNetwork3: FriendNetwork3 = {
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David'],
    'Charlie': ['Alice', 'David', 'Eve'],
    'David': ['Bob', 'Charlie'],
    'Eve': ['Charlie']
}

const isTargetPresent2 = (graph: FriendNetwork3, target: string): boolean => {

    for (const person in graph) {
        if (person === target) {
            return true
        }
    }
    return false
}

console.log(isTargetPresent2(friendNetwork3, 'MArk'))