import express from "express";

const app=express();
const PORT=8080;
app.listen(PORT,()=>{console.log(`server listening on http://localhost:${PORT}`)});

app.use(express.urlencoded({extended:true}))
app.use(express.json())

let usersDB=[
    {"id":1, "name":"user1", "rol":"admin"},
    {"id":2, "name":"user2", "rol":"user"},
    {"id":3, "name":"user3", "rol":"user"},
]

//CONSULTA
app.get("/api/data",(req,res)=>{
    res.send(usersDB);
})

//CREAR
app.post("/api/data",(req,res)=>{
    let user=req.body;
    if(!user.name || !user.rol || !user.id){
        return res.status(400).send("invalid data")
    }else{
        usersDB.push(user)
        res.send({"status":"OK", "message":"User created "})
    }
})

//ACTUALIZAR
app.put("/api/data",(req,res)=>{
    let info=req.query;
    let id=info.id;
    if(info.id){
        usersDB.map(item=>{
            if(item.id==id){
                item.name=info.name?info.name:item.name;
                item.rol=info.rol?info.rol:item.rol;
                return res.send({"status":"OK", "message":"User Updated "})
            }
        })
    }
    res.status(400).send({status:"error", error:"Data not found"})
})

app.delete("/api/data/:id",(req,res)=>{
    let id=req.params.id;
    let lengthInitial=usersDB.length;
    usersDB=usersDB.filter(item=>item.id!=id);
    if(usersDB.length==lengthInitial){
        return res.status(400).send({status:"error", error:"Data not found"})
    }else{        
        res.send({"status":"OK", "message":"User deleted "})
    }
})