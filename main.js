const hamburger=document.getElementById('hamburger')
const navMenu=document.getElementById('nav-menu')
const navClose=document.getElementById('nav-close')
const navLink=document.querySelectorAll('.nav__link')

navLink.forEach((link)=>{
    link.addEventListener('click',()=>{
        navMenu.classList.add('hidden')
    })
})
hamburger.addEventListener('click',()=>{
    navMenu.classList.remove('hidden')
})
navClose.addEventListener('click',()=>{
    navMenu.classList.add('hidden')
})

const tabs=document.querySelectorAll('.tabs_wrap ul li')

const food=document.querySelectorAll('.food')
const snack=document.querySelectorAll('.snack')
const beverage=document.querySelectorAll('.beverage')
const all=document.querySelectorAll('.item_wrap')

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach((tab)=>{
            tab.classList.remove('active')      
        })
        tab.classList.add('active')
        const tabval=tab.getAttribute('data-tabs')
        all.forEach((item)=>{
            item.style.display='none'
        })
        if(tabval==='food'){
            food.forEach((item)=>{
                item.style.display='block'
            })
        }else if(tabval==='snack'){
            snack.forEach((item)=>{
                item.style.display='block'
            })
        }else if(tabval==='beverage'){
            beverage.forEach((item)=>{
                item.style.display='block'
            }) 
        }else{
            all.forEach((item)=>{
                item.style.display='block'
            })
        }
    })  
})

window.addEventListener('scroll',()=>{
    if(window.scrollY>300){
        document.getElementById('scroll_up').classList.remove('hidden')
    }else{
        document.getElementById('scroll_up').classList.add('hidden')
    }
})
window.addEventListener('scroll',()=>{
    const header=document.getElementById('header')
    if(window.scrollY>=50){
        header.classList.add("border-b","border-secondaryColor")
    }else{
        header.classList.remove("border-b","border-secondaryColor")
    }
})
const html=document.querySelector('html')
const themeBtn=document.getElementById('theme-toggle')
let darkMode=JSON.parse(localStorage.getItem('darkMode'))
if (darkMode) {
    html.classList.add('dark');
    themeBtn.classList.replace('ri-moon-line', 'ri-sun-line');
}
themeBtn.addEventListener('click',()=>{
    darkMode = html.classList.contains('dark');
    html.classList.toggle('dark')
    if(darkMode){
        themeBtn.classList.replace('ri-sun-line', 'ri-moon-line');
    }else{
        themeBtn.classList.replace('ri-moon-line', 'ri-sun-line');
    }
    localStorage.setItem('darkMode',!darkMode)
})

const activeLink =()=>{
    const sections=document.querySelectorAll('section')
    const navLink=document.querySelectorAll('.nav__link')
    let current='home'

    sections.forEach((section)=>{
        const sectionTop=section.offsetTop
    
        if(this.scrollY>=sectionTop-60){
            current=section.getAttribute('id')
        }
    })
    navLink.forEach((link)=>{
        link.classList.remove('text-secondaryColor')
        if(link.href.includes(current)){
            link.classList.add('text-secondaryColor')
        }
    })
}
window.addEventListener('scroll',activeLink)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.home_img',{origin:'top'})
sr.reveal('.home_content',{origin:'bottom'})
sr.reveal('.category_card',{origin:'top',interval:300})
sr.reveal('.promo_card_1',{origin:'top'})
sr.reveal('.promo_card_2',{origin:'bottom'})
sr.reveal('.about_img',{origin:'top'})
sr.reveal('.about_content',{origin:'bottom'})
sr.reveal('.menu_items',{origin:'left'})
sr.reveal('.customer_review',{origin:'top'})
sr.reveal('.footer')