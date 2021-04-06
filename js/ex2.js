const lookupElement=document.querySelector("form");
lookupElement.addEventListener("submit",e=>{
   e.preventDefault();
    const username=lookupElement.name.value;
    fetch(`https://api.github.com/users/${username}`)
        .then(response=>response.json())
        .then(display=>{

            const pic_paragraph=document.createElement("p");
            const pictureElement=document.createElement("img");
            pictureElement.src=display.avatar_url;
            pic_paragraph.appendChild(pictureElement);

            const showInfo=document.getElementById("user");
            showInfo.innerHTML="";
            const tableElement=document.createElement("table");
            const rowElement1=document.createElement("tr");
            rowElement1.innerHTML=`<td>Name</td><td>${display.name}</td>`;
            
            const rowElement2=document.createElement("tr");
            rowElement2.innerHTML=`<td>Blog</td><td>${display.blog}</td>`;
            
            const rowElement3=document.createElement("tr");
            rowElement3.innerHTML=`<td>Created</td><td>${display.created_at}</td>`;
            
            tableElement.appendChild(rowElement1);
            tableElement.appendChild(rowElement2);
            tableElement.appendChild(rowElement3);
            showInfo.appendChild(pic_paragraph);
            showInfo.appendChild(tableElement);

        })

        .catch(err=>{
            console.error(err.message);
        })
});

