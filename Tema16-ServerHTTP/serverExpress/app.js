import express from "express";

const data=[
    {id:1,name:"name1",rol:"admin"},
    {id:2,name:"name2",rol:"user"},
    {id:3,name:"name3",rol:"user"},
]

const app= express();
const PORT = 8080;
app.listen(PORT, ()=>{console.log(`Server listen on http://localhost:${PORT}`)})

app.use(express.urlencoded({extended:true}))

app.get("/",(req, res)=>{
    res.send("Hola mundo desde el back");
})

app.get("/saludo",(req, res)=>{
    res.send("Hola mundo desde el backend en otro endpoint");
})

app.get("/saludo/:param1/:param2",(req, res)=>{
    let parametros= req.params;
    res.send(`parámetros recibidos: ${parametros.param1}, ${parametros.param2}`);
})

app.get("/data",(req, res)=>{
    res.send(data);
})

app.get("/data/:id",(req, res)=>{
    let {id}= req.params;
    let dataFilter=data.find(item=>item.id==id);
    if(dataFilter){
        res.send(dataFilter);
    }else{
        res.status(404).send("User not found");
    }    
})

app.get("/request",(req, res)=>{
    let{id, rol}= req.query;
    // res.send(consulta);
    let dataFilter=data.find(item=>item.id==id);
    if(dataFilter){
         res.send(dataFilter);
    }else{
         res.status(404).send("User not found");
    }    
})


