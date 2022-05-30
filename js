const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile = document.getElementById("profile_img")
const nameEl = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bgs_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src="./image1.jpg" alt=""/>'
    title.innerHTML = 'Lorem ipsum, dolor sit amet consectetur'
    excerpt.innerHTML = 'orem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis!'
    profile.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt=""/>'
    nameEl.innerHTML = 'John doe'
    date.innerHTML = 'Oct 8th, 2020'
animated_bgs.forEach(bg=> bg.classList.remove('animated-bg'))
animated_bgs_texts.forEach(bg=> bg.classList.remove('animated-bg-text'))
}
