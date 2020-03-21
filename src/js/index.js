// $('.trigger, .slider').click(function() {
//   $('.slider').toggleClass('close');
// });

const items = document.getElementsByClassName('img-btn');
const sliders = document.getElementsByClassName('slider');

// console.log(typeof items)
const overHandler = (e) => {
  console.log(e);
  console.log(e.target)
  console.log(e.currentTarget)
   //e.target.removeEventListener('mouseover', overHandler, true);
   // const d = e.target.querySelector('div');
  // console.log(e.target.nextSibling)
   const d = e.target.nextSibling.nextSibling;
    //e.target.stopPropagation();
    if(d){
     // console.log(d)
      // d.classList.add('open');
      d.classList.add('close');
      //hideHandler(d);
    }
}

const outHandler = (e) =>{
  console.log(e.target)
  //console.log(e.currentTarget)
  const d = e.target;
    //e.target.stopPropagation();
    if(d){
      //console.log(d)
    // d.classList.remove('open');
     d.classList.remove('close');
      //hideHandler(d);
    }
  
   
}



Array.from(items).forEach((item)=> {
 // console.log(item.querySelector('div').className);
  item.addEventListener('mouseover', overHandler, true);
  //
  //item.addEventListener('mouseout', outHandler, true);  
  // item.stopPropagation(); 
});

Array.from(sliders).forEach((slider)=> {
  slider.addEventListener('mouseleave', outHandler, false);
  //slider.stopImmediatePropagation();
});

// for (var i=0; i<items.length; i++) {
//   items[i].addEventListener('mouseover', overHandler, false);
// }