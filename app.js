/**const body = document.querySelector('body');
    const item = document.querySelectorAll('.item');
    const par =document.querySelector('.par')
    const ol=document.querySelector('ol')
    const link=document.getElementById('link')
    const arr=[1,2,3,4] */

//body.style.color = 'red';
//body.innerHTML='<p>Boqijonov</p>'

//item.forEach((item) => {
//   item.textContent += ' Azizbek';
//});

/**arr.forEach((num)=>{
        ol.innerHTML+=`<li>${num}</li>`
    }) */
// console.log(link.getAttribute('href'));

/**par.classList.add('par2')
   console.log(par.classList);
   console.log(par.textContent.includes('Azizbek'));
 */
const button = document.querySelector("button");
const items = document.querySelectorAll("li");

/**button.addEventListener('click',()=>{
       console.log("ddfdfs");
   }) */
const ul = document.querySelector("ul ");
//ul.remove()

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.remove();
  });
});
button.addEventListener("click", () => {
  //ul.innerHTML+=`<li>Call of Duty</li>`
  const li = document.createElement("li");
  li.textContent = "javascript";
  ul.appendChild(li);
});
