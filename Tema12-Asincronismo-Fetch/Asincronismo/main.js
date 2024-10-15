// fetch("https://api.github.com/users")
//     .then(response => response.json())
//     .then((dato)=>{console.log(dato);})
//     .catch(error=>console.log(error))



fetch("https://api.github.com/users")
    .then(response => response.json())
    .then((dato)=>{        
        console.log(dato);
        dato.forEach(element => {
            let list=document.getElementById("users")
            let li=document.createElement("li");
            li.innerHTML=`
                <h4>${element.login}</h4>
                <img id="imgAvatar" src=${element.avatar_url}>
            `
            list.appendChild(li) 
        });        
        })
    .catch(error=>console.log(error))



// const arr=[
//     {name:"John",age:25},
//     {name:"Ana",age:25},
//     {name:"Frank",age:25},
//     {name:"Steven",age:25},
//     {name:"Mery",age:25},    
// ]


// console.log("1. HOla");
// setTimeout(()=>{
//     let tmp=arr;    
// },2000)
// console.log("2. Mundo");
// console.log("3. Cruel", tmp);


