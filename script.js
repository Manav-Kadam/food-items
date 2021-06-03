document.querySelector('.menu').addEventListener('click', () => {

document.querySelectorAll('.target').forEach((item) => {
  item.classList.toggle('change')
})
})




const icons = document.querySelectorAll('.sect-icon i')
let i = 1
setInterval(() => {
  i++
  const icon = document.querySelector('.sect-icon .change')

  icon.classList.remove('change')
  if (i > icons.length) {
    icons[0].classList.add('change')
    i = 1
  } else {
    icon.nextElementSibling.classList.add('change')
  }

}, 3000)
