const burger = document.getElementById('burger')
const mobNav = document.getElementById('mobNav')
const overlay = document.getElementById('menu_overlay')
const closeBtn = document.getElementById('close')

burger.addEventListener('click', () => {
  mobNav.classList.toggle('open')
  overlay.classList.add('open')
})

overlay.addEventListener('click', () => {
  mobNav.classList.toggle('open')
  overlay.classList.remove('open')
})

closeBtn.addEventListener('click', () => {
  mobNav.classList.toggle('open')
  overlay.classList.remove('open')
})
