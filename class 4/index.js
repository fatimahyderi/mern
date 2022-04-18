console.log('hello');

let checkDay = (a) => {
    let day = a;
    switch (day) {
    case 'Monday':
        console.log('Yes Today is Monday');
        break;
      default:
        console.log(`Sorry,today is not ${day}.`);
    }
}

checkDay('Tuesday');

let checkday = () => {
    let day = new Date;
   let today = day.getDay();
   console.log(today);
   console.log(day);
    switch (today) {
        case 0:
            console.log('Sunday');
            break;
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;  
        case 3:
            console.log('WEdnesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        default:
            console.log('sorry');                            
    }

}

checkday();