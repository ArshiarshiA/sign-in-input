let inputs = document.querySelectorAll('input');
let form = document.querySelector('form');
let inNext = inputs[2];
let spans = document.querySelectorAll('span');

for(let i = 0; i < spans.length; i++){
    spans[i].style.color = 'red';
}

for(let i = 0; i < inputs.length; i++){
    let allInputs = inputs[i];
    allInputs.addEventListener('blur' , ()=>{
        if(allInputs.value == '')
        allInputs.style.borderColor = 'red';
    })
}

form.autocomplete = 'off';
form.addEventListener('submit' , (e)=>{
    for (const inp of inputs) {
        if(inp.value == ''){
           inNext.nextElementSibling.innerHTML = 'همه رو کامل کن';
           e.preventDefault();
        }
    }
    for (let i = 1; i <= 2; i++) {
        if(inputs[1].value != inputs[2].value){
            inputs[2].nextElementSibling.innerHTML = 'پسوورد ها مشابه نیست';
            e.preventDefault();
        }
    }
})


let icons = document.querySelectorAll('i');
//
//FirstIcon
icons[0].addEventListener('mouseenter' , ()=>{
    icons[0].style.paddingRight = '10px';
})
icons[0].addEventListener('mouseleave' , ()=>{
    icons[0].style.paddingRight = '0';
})
//
//SecIcon
icons[1].addEventListener('mouseenter' , ()=>{
    icons[1].style.paddingLeft = '10px';
})
icons[1].addEventListener('mouseleave' , ()=>{
    icons[1].style.paddingLeft = '0';
})
let name = arshia;
//