const initialArray3 = [8, 4, 96, 42, 20, 77, 23]

const quickSort3 = (arr: number[]): number[] => {

    if (arr.length < 2) return arr
    const middleIndex = Math.floor(arr.length / 2)
    const pivot = arr[middleIndex]
    const left: number[] = []
    const right: number[] = []

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (i === middleIndex) continue
        if (current > pivot) right.push(current)
        else left.push(current)
    }
    return [...quickSort3(left), pivot, ...quickSort3(right)]
}

console.log(quickSort3(initialArray3));
