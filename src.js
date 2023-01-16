
let total=0
let articles=document.querySelector("article")
let search=document.querySelector("input")
let panier=document.querySelector("#panier")
let tt=document.querySelector("#total")
search.addEventListener("input",searchfun)
function searchfun(e){
    let prods=products.filter(el=>el.name.toLowerCase().includes(e.target.value.toLowerCase()))
    updateList(prods)
}

function updateList(products){
    let str=""
    products.forEach(e=>{
        str+=`<div class="article">
        <img class="artimg"   src="imgs/${e.id}.png" alt="">
        
        <img class="plusimg"  id="${e.id}" src="imgs/plus.png" alt="">
        <div class="info">
        <div>
            ${e.name} : ${e.price} DH 
        </div>
        <button class="detailsBtn">Detail</button>
        </div>
    </div>`

    })
    
    articles.innerHTML=str
    let add=document.querySelectorAll(".plusimg")
    add.forEach(e=>e.addEventListener("click",addProd))

    let detailsBtn=document.querySelectorAll(".detailsBtn")
    detailsBtn.forEach(e=>e.addEventListener("click",showDetails))
}

updateList(products)

function showDetails(e){
    alert("hi")
}
function addProd(e){
    id=e.target.getAttribute("id")
    console.log("clicked... "+id)
    total+=products[id-1].price
    products[id-1].qtt++;
    updateChart()
}
function delProd(e){
    id=e.target.getAttribute("id")
    total-=products[id-1].qtt*products[id-1].price
    products[id-1].qtt=0;
    updateChart()
}

function updateChart(){
    let str=""
    let chart=products.filter(e=>e.qtt!=0)
    chart.forEach(e=>{
        str+=`
        <div class="chartitem">
        <div><img class="artimgmin"  src="imgs/${e.id}.png" alt=""></div>
        <div class="prodname"> ${e.name} </div>
        <div class="qtt"> ${e.qtt}</div>
        <div><img class="delimg"  id="${e.id}" src="imgs/del.png" alt=""></div>
        </div>
        `
    })
    panier.innerHTML=str
    let ch=document.querySelectorAll(".delimg")
    ch.forEach(e=>e.addEventListener("click",delProd))
    tt.textContent=`Total: ${total}DH`
}
