const lista = document.getElementById("lista");
const url = "https://jsonplaceholder.typicode.com/photos";

fetch(url)
.then(Response =>  Response.json())
.then (Posts => {
    Posts.map(elemento =>{
        var li = document.createElement('li');
        li.innerHTML =`<a href ="detalle.html?id=${elemento.id}">${elemento.id}</a> ${elemento.title}`
        lista.appendChild(li);
    })
})
