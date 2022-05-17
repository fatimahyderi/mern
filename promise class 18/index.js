import express from 'express';

const app = express();
const port = 8080;

console.log("server 8080");
app.get('/',function(req,res){
    
    const getsalary = () => {
        let salaries = [3000,4000,5000]
        let d = new Date();
        let day = d.getDay();
        console.log(day);
        if(day == 2){
            return new Promise((resolve,reject) => {
                resolve(salaries[1])
            });
        }
        
    }

    const getdata = () => {
        let data = {
            '1':{
                fname:'ali',
                lname:'ahmed',
                age:25
            }
        }
            return new Promise((resolve,reject) => {
                resolve(data[1])
            });
        
    }

    const getmsg = () => {
        let msg ='Salary transfer';
        return new Promise((resolve,reject) => {
            resolve(msg)
        });
    }

    let salary1
    let user1
    getsalary().then((salary) => {
        console.log(salary);
        salary1 = salary;
        return getdata();
    }).then((user) => {
        console.log(user);
        user1 = user.fname
        console.log(user1)
        return getmsg();
    }).then((msg) => {
        console.log(`${salary1} ${msg} to ${user1} `);
    })

    res.end()
})

app.listen(port);