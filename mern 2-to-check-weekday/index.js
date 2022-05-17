console.log("hello");

let weekdays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function check_days(userinput){
    let day = '';
    for (let i = 0; i < weekdays.length; i++){
      day = weekdays[i];
      if (day == userinput){
          console.log(true);
      }
     
    }
    
}

let userinput = 'Friday';
check_days(userinput);

console.log("new function");

function checkdays(userinput){
    if(weekdays.indexOf(userinput) !== -1){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

checkdays(userinput);