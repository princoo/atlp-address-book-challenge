const form= document.querySelector("form");
const details= document.querySelector('.content')
const all= document.querySelector('.allcontainer');
const p= document.querySelector('.title');
const c= document.querySelector('.description');
const x= document.querySelector('.price');
const e= document.querySelector('.category');
const f=document.querySelector('.availability');
const q= document.querySelector('.cancel');
const j= document.querySelector('.dates');
const image= document.getElementById('img');
const place = document.querySelector('.image');
const date = document.querySelector('.date');

const img = new Image();
let url="";

let a=localStorage.getItem("contacts");
// if the storage is null
if (a==null) { 
    localStorage.setItem("contacts",JSON.stringify([{title:"sana",description:"iyi ni nzuli kweli",price:"2",category:"drinks", availability:"10", date:"1/1/2022",image:""}]))    
    a=localStorage.getItem("contacts");
}

// displaying names
const b= JSON.parse(a);
for(let i=0 ;i<b.length;i++){
    const node = document.createElement("p");

    // clicking on a name
    node.classList.add('names')
    node.addEventListener('click',()=>{
        all.style.display= "block";
        img.classList.add('img');
        img.src= b[i].image;
        place.appendChild(img);
         
         p.textContent=b[i].title;   
         c.textContent= b[i].description;
         x.textContent= b[i].price +"$";
         e.textContent= b[i].category;
         f.textContent= "(" + b[i].availability +")Available";
         j.textContent= "Uploaded On" +" " +b[i].date;
    })
    
    const textNode = document.createTextNode(b[i].title)
    node.appendChild(textNode)
    details.appendChild(node)
} 
image.addEventListener('change',()=>{
    const fr = new FileReader();
    fr.readAsDataURL(image.files[0]);
    fr.addEventListener('load',()=>{
         url= fr.result;
    })
})

// adding new book
form.addEventListener('submit',(e)=>{
e.preventDefault();
const newArray = JSON.parse(a);
newArray.push({title:form.titles.value,description:form.description.value,price:form.price.value,category:form.categories.value,availability:form.availability.value,date:form.date.value,image:url});
localStorage.setItem("contacts",JSON.stringify(newArray))
window.location.reload()
});
q.addEventListener('click',(e)=>{
e.preventDefault();
all.style.display= "none";
})
















