const initialArray5 = [8, 4, 96, 42, 20, 77, 23]

const quickSort5 = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr
    const pivot = arr.pop()
    if (!pivot) return arr

    const left: number[] = []
    const right: number[] = []

    arr.forEach((num) => {
        if (num < pivot) left.push(num)
        else right.push(num)
    })

    return [...quickSort5(left), pivot, ...quickSort5(right)]
}

console.log(quickSort5(initialArray5));
