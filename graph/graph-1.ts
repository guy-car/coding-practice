// Step 1: Create a simple graph representing friendships
// Each person is connected to their friends

// Define the type for our friend network
type FriendNetwork = {
    [key: string]: string[]
}

const friendNetwork: FriendNetwork = {
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David'],
    'Charlie': ['Alice', 'David', 'Eve'],
    'David': ['Bob', 'Charlie'],
    'Eve': ['Charlie']
}

// Let's visualize what this looks like:
console.log('Friend Network:')
for (const person in friendNetwork) {
    console.log(`${person} is friends with: ${friendNetwork[person].join(', ')}`)
}

// This represents:
//     Alice
//    /     \
//  Bob     Charlie
//   |       /  \
//  David ----   Eve

// Step 2: Simple search function
// Let's find if we can reach one person from another through the network

function canReach(graph: FriendNetwork, start: string, target: string): boolean {
    // If we're looking for ourselves, we're already there!
    if (start === target) return true

    // Keep track of people we've already checked
    const visited: string[] = []

    // List of people we need to check
    const toCheck: string[] = [start]

    while (toCheck.length > 0) {
        // Get the next person to check
        const currentPerson = toCheck.shift()! // Remove first person from list

        // If we've already checked this person, skip them
        if (visited.includes(currentPerson)) continue

        // Mark this person as checked
        visited.push(currentPerson)

        console.log(`Checking: ${currentPerson}`)

        // If this is who we're looking for, we found them!
        if (currentPerson === target) {
            console.log(`Found ${target}!`)
            return true
        }

        // Add all their friends to our list to check
        const friends = graph[currentPerson] || []
        toCheck.push(...friends)
        console.log(`  Added friends to check: ${friends.join(', ')}`)
    }

    console.log(`Could not reach ${target} from ${start}`)
    return false
}

// Test it out!
console.log('\n--- Testing Connections ---')
console.log('Can Alice reach Eve?')
canReach(friendNetwork, 'Alice', 'Eve')

console.log('\nCan Bob reach Eve?')
canReach(friendNetwork, 'Bob', 'Eve')