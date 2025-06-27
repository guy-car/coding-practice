const initialArray2 = [8, 4, 96, 42, 20, 77, 23]

const quickSort2 = (arr: number[]): number[] => {

    if (arr.length <= 1) return arr
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
    return [...quickSort2(left), pivot, ...quickSort2(right)]
}

console.log(quickSort2(initialArray2))