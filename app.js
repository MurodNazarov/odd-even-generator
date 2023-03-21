function domManipulation(){
    let box = document.querySelector('#box')
    let ul = document.createElement('ul')
    ul.classList.add('box')
    box.appendChild(ul)
    let count = 0
    // Loop and Create li Tag
    for(let i = 0; i <= 100; i++){
        let li = document.createElement('li')
        li.innerText=count++
        ul.appendChild(li)
        li.className = 'item'

        // PrimeNumbers
        // if(i % 1 ===0 && i % i === 0){
        //     li.style.backgroundColor = '#FC2947'
        // } else 
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