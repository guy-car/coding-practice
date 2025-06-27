const initialArray = [8, 4, 96, 42, 20, 77, 23]

const quickSort = (arr) => {

    if (arr.length <= 1) return arr

    const middleIndex = Math.floor(arr.length / 2)
    const pivot = arr[middleIndex]
    const left = []
    const right = []

    for (let index = 0; index < arr.length; index++) {
        let current = arr[index]
        if (current === pivot) continue
        if (current > pivot) right.push(current)
        if (current < pivot) left.push(current)
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(initialArray))



// Our function receives an array
// we need a pivot
// a left side and right side
// we place on the left all values lower than than the pivot values
// we place on the right all values higher than the pivot
// our pivot is now in its final position (it is sorted)
// we take our left array, we know all values are at least lower than the pivot
// we pick a pivot for the left side array
// we once again place to the left of this new pivot, values lower and on the right values higher
// we do the same thing on the right side
// we repeat this process until values are sorted (what does that mean?)