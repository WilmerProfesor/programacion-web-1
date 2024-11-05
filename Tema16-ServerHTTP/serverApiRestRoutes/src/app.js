import express from "express";
import userRouter from "./routes/users.router.js";
// import userPlants from "./routes/plants.router.js";

const app=express();
const PORT=8080;
app.listen(PORT,()=>{console.log(`server listening on http://localhost:${PORT}`)})

app.use('/api/users/',userRouter); //ruta de los end-points
// app.use('/api/plants',userPlants); //ruta de los end-points