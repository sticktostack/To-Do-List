let inputBox = document.getElementById('textarea')
let add = document.getElementById('add')
let myList = document.getElementById('myList')
add.addEventListener('click',function(){
  if(inputBox.value === ''){
    alert('You Must Write Something')
  }else{
    let li = document.createElement('li')
    li.innerHTML =inputBox.value
    myList.appendChild(li)
    inputBox.value = ''
    let cross = document.createElement('cross')
    cross.id='cross'
    cross.innerHTML = "\u00D7"
    li.appendChild(cross)
  }
})
myList.addEventListener('click',(event)=>{
  if(event.target.tagName === "LI"){
      event.target.classList.toggle('checked')
  }else if(event.target.id === "cross"){
    event.target.parentElement.remove()
  }
})

let body = document.querySelector('body')
body.addEventListener('keypress',function(e){
  if(e==Space)
  console.log('e');
})