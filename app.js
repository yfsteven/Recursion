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
