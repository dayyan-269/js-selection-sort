let {data} = require('./data')  //  import data dari file data.js

const selectionSort = (data, length) => {
    let min //  variable untuk menyimpan indeks dengan nilai terkecil

    for (let i = 0; i < length - 1; i++) {
        min = i //  pada awal nilai min adalah indeks pertama

        //  perulangan untuk mencari nilai terkecil
        for (let j = i + 1; j < length; j++) {
            //  mengecek apakah nilai yang ada lebih kecil dari yang tersimpan pada
            //  variable "min"
            if (data[j].nip < data[min].nip) {
                min = j // jika iya, maka indeks akan diganti, begitu seterusnya
            }
        }

        //  proses pertukaran/swapping dari 2 item yang ada
        let temp = data[min]
        data[min] = data[i]
        data[i] = temp

        //perulangan selesai
    }
}

//  menampilkan data acak
console.log('before', data);

//  memanggil fungsi selectionSort serta menambahkan parameternya
selectionSort(data, data.length)

//menampilkan data yang terurut
console.log('after', data);