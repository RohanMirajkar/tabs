const mylis = [...document.querySelectorAll('.tabHeading li')];
const myContent = [...document.querySelectorAll('.tabContent')];

const onLiClick =(e)=>{
    const getId = e.target.dataset.id;
    mylis.forEach(li => li.classList.remove('active'));
    e.target.classList.add('active');

    myContent.forEach(cont => cont.style.display = 'none');
    document.getElementById(getId).style.display = 'block'

}


mylis.forEach(li =>{
    li.addEventListener('click' , onLiClick)
})


