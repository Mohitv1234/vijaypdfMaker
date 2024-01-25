let arrayItems = [], title='';


AddTitle.addEventListener("click", ()=>{
    title = document.querySelector('#title').value;
    titleText.textContent = title;
    DateToday.textContent = `${document.querySelector('.dateToday').value}`; 
    order = document.querySelector('.order').value;
    document.querySelector('#order').textContent = order;

})


document.querySelector('.button_add').addEventListener('click', ()=>{
    let a = {};
    a.item = document.querySelector('.item').value;
    a.quantity = document.querySelector('.quantity').value;
    a.days = document.querySelector('.days').value;
    a.rate = document.querySelector('.rate').value;
    a.size = document.querySelector('.size').value;
    // a.subtotal = document.querySelector('.subtotal').value;

    arrayItems.push(a);
let Scrub = '', subtotalitems=0;
    arrayItems.map((e)=>{


        Scrub = Scrub+`<tr><td>${e.item}</td><td>${e.quantity}</td><td>${e.size}</td><td>${e.days}</td><td>${e.rate}</td><td><input type="text" style="border: none;padding: 0px; width:100%; font-size: 12px; color: #5b5b5b;background-color: transparent;" class="input_amount" value="${+e.rate * +e.days}"></td></tr>`

       e.value = +e.days * +e.rate;
       subtotalitems = +subtotalitems + +e.value;
       document.querySelector('#subtotalitems').innerHTML = `<input type="text" style="border: none;padding: 0px; width:100%; font-size: 14px; color: #5b5b5b;background-color: transparent;" value='${subtotalitems}' class="input_amount">`;
            document.querySelector('.tbodyItems').innerHTML=Scrub;
       
    })
})

