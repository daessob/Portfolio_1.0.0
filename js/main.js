const lenis = new Lenis();

lenis.on('scroll', (e) => {
   //  console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const ani_intro = gsap.timeline();

ani_intro.from(".intro .intro01", {autoAlpha: 1, }, "-=1")
         .to(".intro .intro01", {autoAlpha: 0,}, "-=1")
         .from(".intro .intro02", {autoAlpha: 0, y: 30 }, "+=1")
         .to(".intro .intro02", {autoAlpha: 0, y: -30}, "+=1")
         .from(".intro .intro03", {autoAlpha: 0, y: 30}, "+=1")
         .to(".intro .intro03", {autoAlpha: 0, y: -30}, "+=1")
         .from(".intro .intro04", {autoAlpha: 0, y: 30}, "+=1")
         .to(".intro .intro04", {autoAlpha: 0, y: -30}, "+=1")
         
ScrollTrigger.create({
   animation: ani_intro,
   trigger: '.intro',
   start: 'top top',
   end: '+=5000',
   scrub: true,
   pin: true,
   anticipatePin: 1,
})

ScrollTrigger.create({
   trigger: '.profile',
   start: 'top top',
   end: '+=1',
   scrub: true,
   pin: true,
   anticipatePin: 1,
   snap: 0.5 
})

let windowH = window.innerHeight;
const profileT = document.querySelector('.profile_txt')
const projectT = document.querySelector('.project_txt')
const designT = document.querySelector('.design_txt')
const contectT = document.querySelector('.contect_txt')
window.addEventListener('scroll', ()=> {
   let windowScroll = window.scrollY;
   const topPosition03 = profileT.getBoundingClientRect().top + window.scrollY;
   const topPosition = projectT.getBoundingClientRect().top + window.scrollY;
   const topPosition01 = designT.getBoundingClientRect().top + window.scrollY;
   const topPosition02 = contectT.getBoundingClientRect().top + window.scrollY;
   console.log(windowScroll)
   
   if(windowScroll + windowH > topPosition) {
      projectT.classList.add('blur-none')
   } else {
      projectT.classList.remove('blur-none')
   }
   if(windowScroll + windowH > topPosition01) {
      designT.classList.add('design-none')
   } else {
      designT.classList.remove('design-none')
   }
   if(windowScroll + windowH > topPosition02) {
      contectT.classList.add('blur-none')
   } else {
      contectT.classList.remove('blur-none')
   }
   if(windowScroll + windowH > topPosition03) {
      profileT.classList.add('profile-none')
   } else {
      profileT.classList.remove('profile-none')
   }
})
const section = document.querySelectorAll('section')
const ui = document.querySelector('.hdr ul')
const li = document.querySelectorAll('.hdr li')

const profileTop = section[1].getBoundingClientRect().top + window.scrollY;
const projectTop = section[2].getBoundingClientRect().top + window.scrollY;
const designTop = section[3].getBoundingClientRect().top + window.scrollY;
const contectTop = section[4].getBoundingClientRect().top + window.scrollY;

let h = window.scrollY;

li[0].addEventListener('click', ()=> {
   gsap.to(window, 1, {
      scrollTo:profileTop
   })
})
li[1].addEventListener('click', ()=> {
   gsap.to(window, 1, {
      scrollTo:projectTop
   })
})
li[2].addEventListener('click', ()=> {
   gsap.to(window, 1, {
      scrollTo:designTop
   })
})
li[3].addEventListener('click', ()=> {
   gsap.to(window, 1, {
      scrollTo:contectTop
   })
})

const mobileUi = document.querySelector('.card03 .card_info .btn01')
mobileUi.addEventListener('click',()=> {
   alert('준비중입니다.');
})

window.addEventListener('scroll', ()=> {
   let h = window.scrollY;

   if(h + 300 >= profileTop) {
      ui.style.display = 'block'
   } else {
      ui.style.display = 'none'
   }

   const 카드 = document.querySelectorAll('.card_box')
   let 카드두번째절대높이 = 카드[1].getBoundingClientRect().top + h
   let 카드세번째절대높이 = 카드[2].getBoundingClientRect().top + h
   let 카드01오버랩 = 카드[0].offsetHeight;
   let 카드02오버랩 = 카드[0].offsetHeight;
   console.log('카드오버랩',카드01오버랩)
   console.log('카드 두번째 절대 높이' ,카드두번째절대높이)

   
      
   let card01 = 1 - ((h - (카드두번째절대높이 - 카드01오버랩)) / (카드두번째절대높이 - 300 - (카드두번째절대높이 - 카드01오버랩)))
   let card01_1 = 1 - ((h - (카드두번째절대높이 - 카드01오버랩)) / (카드두번째절대높이 - 300 - (카드두번째절대높이 - 카드01오버랩))) * 0.1
   let card02 = 1 - ((h - (카드세번째절대높이 - 카드02오버랩)) / (카드세번째절대높이 - 300 - (카드세번째절대높이 - 카드01오버랩)))
   let card02_1 = 1 - ((h - (카드세번째절대높이 - 카드02오버랩)) / (카드세번째절대높이 - 300 - (카드세번째절대높이 - 카드02오버랩))) * 0.1

   console.log(card01)
   카드[0].style.opacity = card01
   카드[1].style.opacity = card02

   if (h >= (카드두번째절대높이 - 카드01오버랩)) {
      카드[0].style.scale = card01_1
   } else {
      카드[0].style.scale = 1
   }
   if (h >= (카드세번째절대높이 - 카드02오버랩)) {
      카드[1].style.scale = card02_1
   } else {
      카드[1].style.scale = 1
   }
})

const ani_design = gsap.timeline();
ani_design.to(".design>div", {}, "+=1")
ScrollTrigger.create({
   animation: ani_design,
   trigger: '.design',
   start: 'top top',
   end: '+=1',
   scrub: true,
   pin: true,
   anticipatePin: 1,
   snap: 0.1 
})

function easein_project() {
   window.open('./codeReview/easein_project.html', '_blank');
}
function team_project() {
   window.open('./codeReview/team_project.html', '_blank');
}
function easein_popup() {
   window.open('./codeReview/easein_code.html', '_blank');
}
function team_popup() {
   window.open('./codeReview/team_code.html', '_blank');
}
function closeWindow() {
   window.close();
}

