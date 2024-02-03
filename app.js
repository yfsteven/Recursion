//Nonrecursive Fibonacci sequence
function fibs(num){
    let fibsArray = [];
    for(let i = 0; i < num; i++){
        if(i === 0 || i === 1){
            fibsArray.push(i);
        }
        else {
            fibsArray.push(fibsArray[i-2] + fibsArray[i-1]);
        }
    } 
    return fibsArray;
}
//Recursive Fibonacci sequence
function fibsRec(num){
    if(num < 2) {
        return num;
    }
    else {
        return fibsRec(num-2) + fibsRec(num-1);
    }
}

//Merge Sort Function Attempt
function mergeSort(array){
    if(array.length === 1){
        return array;
    }
    else {
        const half = Math.ceil(array.length /2);
        const leftHalf = array.slice(0, half);
        const rightHalf = array.slice(half);
        for(let i = 0; i < array.length; i++){
            return mergeSort(rightHalf)
        }
    }
}


