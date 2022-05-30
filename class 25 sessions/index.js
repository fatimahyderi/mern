import  Express  from "express";
import cookieSession from "cookie-session";
import cookieParser from "cookie-parser";
const app = Express();
const port = 8000;

console.log(`Server running on ${port}`);

app.use(cookieSession({
    name:'fatimasession',
    keys:['codegirls']
}))

// app.use(function (req, res, next) {
//     req.sessionOptions.maxAge = req.session.maxAge || req.sessionOptions.maxAge
//     next()
//   })

app.get('/session',(req,res,next) => {
    // res.send('Session Started')
    console.log(req.session)
   console.log(req.session.views = (req.session.views || 0) + 1); 

    // Write response
    res.end(req.session.views + ' views')
})

app.get('/sessiondestroy',(req,res,next) => {
    req.session = null;
   //console.log(req.session.views + ' views')
   
//    if(req.session.views == null){
//         req.session.views = 0;
//         console.log(req.session.views + ' views')
//    }
   
   res.send("session destroyed");


})

app.listen(port);
