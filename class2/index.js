let weekdays = ['friday','sataurday','sunday','monday','tuesday','wednesday','thursday'];

function week(){
    for (i = 0; i < weekdays.length; i++){
        let days= weekdays[i];
        if(days == 'sunday'){
            console.log('yes today is sunday')
        }
        else{
            console.log('false');
        }
    }
    
}

week();


