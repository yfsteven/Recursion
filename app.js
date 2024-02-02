//Nonrecursive Fibonacci sequence
function fibs(num){
    let fibsArray = [];
    let value = 0;
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
