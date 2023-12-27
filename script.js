//your code here!


let container = document.querySelector('#infi-list')
let count=0
for(;count<=10;count++){
  let div =document.createElement('li')
  div.innerText = `item ${count}`
  container.appendChild(div)
}

container.addEventListener('scroll',()=>{
  let scrolledHeight=container.scrollTop
  console.log(container.scrollHeight)
  console.log(container.clientHeight)
  let maxScrollHeight = container.scrollHeight - container.clientHeight
  if(maxScrollHeight-scrolledHeight<=5){
    console.log('hello')
  addTwo()
  }
})



function addTwo(){
  let div1 = document.createElement('li')
  div1.innerText = `item ${count++}`
  container.appendChild(div1)
  let div2 = document.createElement('li')
  div2.innerText = `item ${count++}`
  container.appendChild(div2)
}
