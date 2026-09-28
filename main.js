const  a = document.querySelector('.form1')
const body = document.querySelector('body')
let count = 0


function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const computerguess = randomNumber()


a.addEventListener('submit',(e) => {

    e.preventDefault()
    
    const b = a.querySelector('#number').value
    const c = a.querySelector('.enter')
    c.textContent = ` Your entered number :${b}`

    count++;
    const d = a.querySelector('.yourguess')
    d.textContent =  `Number of guess you made : ${count}`

    
     const f = a.querySelector('.error')

    if( count == '10'){
        f.textContent = ` Oops ! you tried 10 times ` 
        body.style.backgroundColor = 'red'
    }

    const g = a.querySelector('.won')
    if (computerguess == b ){
        g.textContent = 'You won !'
        body.style.backgroundColor = 'green'
    }



})