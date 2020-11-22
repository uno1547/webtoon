function binarySearch(numberList, target) {
    const listLength = numberList.length
    let low = 0
    let high = listLength
    let mid = Math.floor((low+high)/2)
    while (low + 1 < high) {
        if(numberList[mid] <= target) {
            low = mid
        }else{
            high = mid
        }
        mid = Math.floor((low + high)/2)
    }
    return numberList[mid]
}
let emptyList = []
for(i=0;i<1000;i++){
    emptyList.push(i)
}
console.log(binarySearch(emptyList, 500))
console.log(binarySearch(emptyList, 0))
console.log(binarySearch(emptyList, 100))


function factorial (n) {
    if(n==1) {
        return 1 
    }
    else {
        return n * factorial(n-1)
    }
}
console.log(factorial(5))
console.log(factorial(1))
console.log(factorial(3))

function binarySearch2(numberList, target) {
    const listLength = numberList.length
    let low = 0 
    let high = listLength - 1
    let mid = Math.ceil((low + high) / 2)
    while (low != high) {
        if(numberList[mid] <= target) {
            low = mid 
        }else {
            high = mid - 1
        }
        mid = Math.ceil((low + high)/2)
    }
    return numberList[mid]
}
let list_a = [1,2,3,4,5,6,7,8,9,10]
let list_b = [1,2,3,4,5,6,7,8,9]
let list_c = [1,3,5,7,9,11]
let list_d = [2,4,6,8,10]
console.log(binarySearch2(list_a, 1))
console.log(binarySearch2(list_a, 2))
console.log(binarySearch2(list_a, 3))
console.log(binarySearch2(list_a, 4))
console.log(binarySearch2(list_a, 5))
console.log(binarySearch2(list_a, 6))
console.log(binarySearch2(list_a, 7))
console.log(binarySearch2(list_a, 8))
console.log(binarySearch2(list_a, 9))
console.log(binarySearch2(list_a, 10))
console.log(binarySearch2(list_b, 1))
console.log(binarySearch2(list_b, 2))
console.log(binarySearch2(list_b, 3))
console.log(binarySearch2(list_b, 4))
console.log(binarySearch2(list_b, 5))
console.log(binarySearch2(list_b, 6))
console.log(binarySearch2(list_b, 7))
console.log(binarySearch2(list_b, 8))
console.log(binarySearch2(list_b, 9))
console.log(binarySearch2(list_c, 1))
console.log(binarySearch2(list_c, 3))
console.log(binarySearch2(list_c, 5))
console.log(binarySearch2(list_c, 7))
console.log(binarySearch2(list_c, 9))
console.log(binarySearch2(list_c, 11))
console.log(binarySearch2(list_d, 2))
console.log(binarySearch2(list_d, 4))
console.log(binarySearch2(list_d, 6))
console.log(binarySearch2(list_d, 8))
console.log(binarySearch2(list_d, 10))

function binarySearchRecursive(numberList, target) {
    let low = 0
    let high = numberList.length - 1
    let mid = Math.ceil((low + high) / 2)
    if (numberList.length == 1) {//길이 1
        return numberList[mid]
    }else{//길이 2이상
        if(numberList[mid] <= target) { //중간값보다 찾는값이 오른쪽 중간에서 끝까지 자름
            binarySearchRecursive(numberList.slice(mid, high + 1), target)
            //console.log(numberList.slice(mid, high + 1))//10
        }else{ // 중간값보다 찾는값이 왼쪽 0에서 중간까지 자름 
            binarySearchRecursive(numberList.slice(0, mid), target)
            //console.log(numberList.slice(0, mid))//13
        }
    }
}
let list_a = [1,2,3,4,5,6,7,8,9,10]
let list_b = [1,2,3,4,5,6,7,8,9]
let list_c = [1,3,5,7,9,11]
let list_d = [2,4,6,8,10]
console.log(binarySearchRecursive(list_a, 1))
console.log(binarySearchRecursive(list_a, 2))
console.log(binarySearchRecursive(list_a, 3))
console.log(binarySearchRecursive(list_a, 4))
console.log(binarySearchRecursive(list_a, 5))
console.log(binarySearchRecursive(list_a, 6))
console.log(binarySearchRecursive(list_a, 7))
console.log(binarySearchRecursive(list_a, 8))
console.log(binarySearchRecursive(list_a, 9))
console.log(binarySearchRecursive(list_a, 10))
console.log(binarySearchRecursive(list_b, 1))
console.log(binarySearchRecursive(list_b, 2))
console.log(binarySearchRecursive(list_b, 3))
console.log(binarySearchRecursive(list_b, 4))
console.log(binarySearchRecursive(list_b, 5))
console.log(binarySearchRecursive(list_b, 6))
console.log(binarySearchRecursive(list_b, 7))
console.log(binarySearchRecursive(list_b, 8))
console.log(binarySearchRecursive(list_b, 9))
console.log(binarySearchRecursive(list_c, 1))
console.log(binarySearchRecursive(list_c, 3))
console.log(binarySearchRecursive(list_c, 5))
console.log(binarySearchRecursive(list_c, 7))
console.log(binarySearchRecursive(list_c, 9))
console.log(binarySearchRecursive(list_c, 11))
console.log(binarySearchRecursive(list_d, 2))
console.log(binarySearchRecursive(list_d, 4))
console.log(binarySearchRecursive(list_d, 6))
console.log(binarySearchRecursive(list_d, 8))
console.log(binarySearchRecursive(list_d, 10))
