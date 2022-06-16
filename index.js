let {data} = require('./data')

const selectionSort = (data, length) => {
    let min

    for (let i = 0; i < length - 1; i++) {
        min = i

        for (let j = i + 1; j < length; j++) {
            if (data[j].nip < data[min].nip) {
                min = j
            }
        }

        let temp = data[min]
        data[min] = data[i]
        data[i] = temp
    }
}

console.log('before', data);
selectionSort(data, data.length)
console.log('after', data);