let inputValue = document.querySelector('.input')
let error = document.querySelector('.error')
let btn = document.querySelector('.btn')
let box = document.querySelector('#box')
let ul = document.createElement('ul')
ul.classList.add('box')
function domManipulation(nbr = 10 ){
    box.appendChild(ul)
    let count = 0
    // Loop and Create li Tag
    for(let i = 0; i <= nbr; i++){
        let li = document.createElement('li')
        li.innerText=count++
        ul.appendChild(li)
        li.className = 'item'
        if (i % 2 === 0) {
            li.style.backgroundColor = '#03C988'
        } else if(i % i === 0 ){
            li.style.backgroundColor = '#FC2947'
        } else if (i % 2 === 1){
            li.style.backgroundColor = '#FFEA20'
        }
    }

}
domManipulation()


let  p = document.createElement('p')
p.style.color = 'red'
btn.addEventListener('click',(e)=>{
    e.preventDefault()
   let toNumber = parseInt(inputValue.value)
   console.log(toNumber); 

    error.appendChild(p)
    if (toNumber > 0 && typeof toNumber === 'number' ){
        domManipulation(toNumber)
    } else if(inputValue.value < 0 ){
        p.textContent = 'You should write only positive number'
        showError()
    } else if(typeof toNumber == 'number' ){
        p.textContent = 'You should not write string' 
        showError()
    } 
})

function showError (){
    setTimeout(() => {
        p.textContent = ''
        inputValue.value = ''
    }, 3000);
}
console.log(typeof NaN);