const express=require('express');
const app = express();
app.get(
  "/",(req,resp)=>{
    resp.send("you are not working....")
  });  
app.listen(5000);