const form= document.querySelector("form");
const details= document.querySelector('.content')
const all= document.querySelector('.allcontainer');
const p= document.querySelector('.username');
const c= document.querySelector('.useremail');
const x= document.querySelector('.useraddress');
const e= document.querySelector('.usernumber');
const q= document.querySelector('.cancel');
console.log(x);
let a=localStorage.getItem("contacts");
// if the storage is null
if (a==null) { 
    localStorage.setItem("contacts",JSON.stringify([{name:"Claude",email:"claude@gmail.com",address:"Kigali, Rwanda",contact:"0781428932"}]))
    a=localStorage.getItem("contacts");
}
// displaying names
const b= JSON.parse(a);
for(let i=0 ;i<b.length;i++){
    const node = document.createElement("p")
    // clicking on a name
    node.classList.add('names')
    node.addEventListener('click',()=>{
        all.style.display= "block";
         p.textContent=b[i].name;   
         c.textContent= b[i].email;
         x.textContent= b[i].address;
         e.textContent= b[i].contact;
    })
    const textNode = document.createTextNode(b[i].name)
    node.appendChild(textNode)
    details.appendChild(node)
}
// adding new book
form.addEventListener('submit',(e)=>{
e.preventDefault();
const newArray = JSON.parse(a);
newArray.push({name:form.name.value,email:form.email.value,address:form.address.value,contact:form.phone.value});
localStorage.setItem("contacts",JSON.stringify(newArray))
window.location.reload()
});
q.addEventListener('click',(e)=>{
e.preventDefault();
all.style.display= "none";


})






