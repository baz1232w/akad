// <------------ slider ------------> //  

const slider = document.querySelectorAll('.slider_item');
let sliderIndex = 0;


const changeSlideItem = () => {
    slider.forEach(el => el.style.display = 'none');
    if(sliderIndex >= slider.length - 1 ){
        sliderIndex = 0;
        slider[sliderIndex].style.display = 'block';
    }else{
        sliderIndex++
        slider[sliderIndex].style.display = 'block';
    }
    

}
if(slider.length > 0){
    changeSlideItem()

    setInterval(()=>{
        changeSlideItem();
    },4000)
}


// <------------ gallery ------------> // 

// <------------ buttons ------------> //
const btnAll = document.querySelector('.btn_All'),
      btnWeb = document.querySelector('.btn_Webdesign'),
      btnGraphic = document.querySelector('.btn_Graphic'),
      btnFashion = document.querySelector('.btn_Fashion'),
      btnLogo = document.querySelector('.btn_Logo'),
      btnAdverst = document.querySelector('.btn_Advertising'),
      buttons = document.querySelectorAll('.btn_gallery');
// <------------ galleryPhotos ------------> //

const galleryPhotos = document.querySelectorAll('.grid_items');




// <------------ functions ------------> //


const showAll = () => {
    cleanAll();
    galleryPhotos.forEach(el => el.style.display = 'block');
    animatedGalletyItem()
}

function showItems(items){
   let photos = document.getElementsByClassName(items);
   cleanAll();
   for (let i = 0; i < photos.length; i++) {
        photos[i].style.display = 'block';
   }
   animatedGalletyItem()
}


const cleanAll = () => {
    galleryPhotos.forEach(el => el.style.display = 'none');
    buttons.forEach(el => el.className = el.className.replace('active', ' '));
}

// <------------ gallery animated ------------>

const galleryItem = document.querySelectorAll('.grid_items');   
const animatedGalletyItem = () => {
    for(let i = 0 ; i < galleryItem.length; i++) {
    
        if(galleryItem[i].classList.contains('anti_rotate')){
            galleryItem[i].classList.remove('anti_rotate')
        }


        if(galleryItem[i].style.display == 'block'){
            galleryItem[i].classList.add('rotate')
        }

        setTimeout(()=>{
            galleryItem[i].classList.replace('rotate','anti_rotate')
        }, 1000)
    }


}


// <------------eventsListener ------------> //

if(btnAll){
    btnAll.addEventListener('click',()=>{showAll()
    btnAll.classList = btnAll.classList + (' active'); // added class active to btn 
    });
}
if(btnWeb){
    btnWeb.addEventListener('click',()=>{showItems('web')
    btnWeb.classList = btnWeb.classList + (' active') // added class active to btn 
    });
}
if(btnGraphic){
    btnGraphic.addEventListener('click',()=>{showItems('graphic')
    btnGraphic.classList = btnGraphic.classList + (' active') // added class active to btn 
    });
}
if(btnFashion){
    btnFashion.addEventListener('click',()=>{showAll()
    btnFashion.classList = btnFashion.classList + (' active'); // added class active to btn 
    });
}
if(btnLogo){
    btnLogo.addEventListener('click',()=>{showItems('web')
    btnLogo.classList = btnLogo.classList + (' active'); // added class active to btn 
    });
}if(btnAdverst){
    btnAdverst.addEventListener('click',()=>{showItems('graphic')
    btnAdverst.classList = btnAdverst.classList + (' active'); // added class active to btn 
    }); 
}



// <------------scrollingEvent------------> 

const animateItems = document.querySelectorAll('.animate_items');


if(animateItems.length > 0){
window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for(let i = 0; i < animateItems.length; i++){
            const el = animateItems[i];
            const elHeight = el.offsetHeight;
            const elOffset = offset(el).top;
            const animStart = 3 ;

            let animItemPoint = window.innerHeight - elHeight / animStart;

            if(elHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > elOffset - animItemPoint) && pageYOffset < (elOffset + elHeight)){
                el.classList.add('_active');
            }else{
                if(!el.classList.contains('_anim_no_hide')){
                 el.classList.remove('_active');
                }
            }
                  
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect();
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
            scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft} 
    }

    animOnScroll()
}


const popUp = document.querySelector('.popUp')
const closer = document.querySelector('.closer')
const burger = document.querySelector('.burger')

popUp.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
    burger.classList.add('active')
    document.querySelector('body').classList.add('overflow')
})

closer.addEventListener('click',()=>{
    burger.classList.remove('active')
    document.querySelector('body').classList.remove('overflow')
})