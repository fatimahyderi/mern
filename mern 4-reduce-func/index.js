//console.log('hello');

function checkDay() {
    //console.log('test');
    let today_date = new Date;
    let  today = today_date.getDay();
    let sentence_to_display = 'Today is';
    //console.log(today_date);
    //console.log(today);
    switch(today){
        case 0:
            console.log(`${sentence_to_display} Sunday`);
            break;
        case 1:
            console.log(`${sentence_to_display} Monday`);
            break;
        case 2:
            console.log(`${sentence_to_display} Tuesday`);
            break;
        case 3:
            console.log(`${sentence_to_display} Wednesday`);
            break;
        case 4:
            console.log(`${sentence_to_display} Thursday`);
            break;
        case 5:
            console.log(`${sentence_to_display} Friday`);
            break;
        case 6:
            console.log(`${sentence_to_display} Saturday`);
            break;
                                                        
    }
}

checkDay();


let total = 0;
num_array = [34,67,45,67,23,45,65,45,105,805,600,320];
for(let i = 0; i < num_array.length; i++){
    let num = num_array[i];
    total = total + num ;
    
}
console.log(`Sum of array is ${total}.`);

let max = -Infinity;
for(let i = 0; i < num_array.length; i++){
    if (num_array[i] > max) {
        max = num_array[i];

    }
}
console.log(`Max value : ${max}`);


var max_num = num_array.reduce((total, amount) => { return Math.max(total,amount)}); 

console.log(`Max Value by reduce funtion is ${max_num}.`);
