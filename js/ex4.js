const dataElements=document.querySelector("form");
dataElements.addEventListener("submit",e=>{
    e.preventDefault();
    const formData=new FormData(e.target);

        const show_info=document.getElementById("data");
        const tableElement=document.createElement("table");
        const rowElement1=document.createElement("tr");
        rowElement1.innerHTML="<th>Key</th><th>Value</th>";

        const rowElement2=document.createElement("tr");
        rowElement2.innerHTML=`<td>Name</td>
        <td>${rowElement2.textContent=formData.get("name")}</td>`;

        const rowElement3=document.createElement("tr");
        rowElement3.innerHTML=`<td>Email</td>
        <td>${rowElement3.textContent=formData.get("email")}</td>`;

        const rowElement4=document.createElement("tr");
        rowElement4.innerHTML=`<td>Payment</td>
        <td>${rowElement4.textContent=formData.get("payment")}</td>`;

        
        tableElement.appendChild(rowElement1);
        tableElement.appendChild(rowElement2);
        tableElement.appendChild(rowElement3);
        tableElement.appendChild(rowElement4);
        show_info.appendChild(tableElement);
});