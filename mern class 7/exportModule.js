let weekdays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function checkdays(userinput){
    if(weekdays.indexOf(userinput) !== -1){
        console.log(true);
    }
    else{
        console.log(false);
    }
}



function checktemp(a){
   let temp = a * 9/5 + 32;
   console.log(temp)
}

export {checkdays,checktemp};