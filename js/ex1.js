fetch(
    "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
.then(response=>response.json())
.then(text=>{
    
    const ListElement=document.getElementById("paintings");
    text.forEach(i=>{
        const rowElement=document.createElement("tr");
        rowElement.innerHTML=`<td>${i.name}</td><td>${i.year}</td><td>${i.artist}</td>`;
        ListElement.appendChild(rowElement);
    });
})
.catch(err=>{
    console.log(err.message);
})
