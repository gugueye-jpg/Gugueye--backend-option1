require('dotenv').config();
const express=require('express');
const app=express();
app.use(express.json());

app.get('/api/health',(req,res)=>res.json({ok:true}));

let reports=[];
app.post('/api/found-reports',(req,res)=>{
  const rec={id:reports.length+1,...req.body,created_at:new Date().toISOString()};
  reports.push(rec);
  res.json(rec);
});

app.get('/api/reports',(req,res)=>res.json(reports));

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log("GUGUEYE backend running on port",PORT));
