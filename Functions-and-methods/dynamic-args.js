function sumUp(...numbers){
    return numbers.reduce((sum,number)=>sum+number,0)
}

const total = sumUp(10,19,-3,22,5,100);

