function isLeepyear(year){
    if(typeof year !== "number" || year < 0){
        return 'Invalid';
    }
    if(year % 4 === 0 && year % 100 !== 0 ){
        return true;
    }
    else{
        return false;
    }
}
const minu = (isLeepyear(2024))
console.log(minu)