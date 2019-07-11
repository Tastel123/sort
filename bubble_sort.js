function bubbleSort(arr) {
    var len = arr.length
    var minIndex, temp
    for(var i = 0; i < len - 1; i++) {
        minIndex = i
        for(var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}
// 每次让一个数排好 两两交换位置

// function bubbleSort(arr) {
//     var len = arr.length
//     for(var i = 0; i < len; i++) {
//         // minIndex = i
//         for(var j = 0; j < len-1-i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }
const arr = [8, 2, 5, 9, 7]
console.log(bubbleSort(arr))