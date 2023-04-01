let Open=document.getElementsByClassName('icon');
let Box2= document.getElementsByClassName('Box2');
let content=document.getElementsByClassName('content');

Open[0].addEventListener('click',()=>
{
    console.log('clicked');
    Box2[0].classList.add('Open');
    content[0].classList.add('contentOut');
})