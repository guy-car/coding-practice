const initialArray4 = [8, 4, 96, 42, 20, 77, 23]

const quickSort4 = (arr: number[]): number[] => {
    if (arr.length < 2) return arr

    const middleIndex = Math.floor(arr.length / 2)
    const left: number[] = []
    const right: number[] = []
    const pivot = arr[middleIndex]

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (i === middleIndex) continue
        if (current > pivot) right.push(current)
        else left.push(current)
    }
    return [...quickSort4(left), pivot, ...quickSort4(right)]
}

console.log(quickSort4(initialArray4))