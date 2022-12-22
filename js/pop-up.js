let activity_Images = document.querySelectorAll(".activity img")
const close_Sign = document.querySelector(".pop-up-image span")

console.log(activity_Images)

activity_Images.forEach(function(image){
    image.onclick = function(){
        document.querySelector(".pop-up-image").style.display = "block"
        document.querySelector(".pop-up-image img").src = image.getAttribute("src")
    }
})

close_Sign.onclick = function(){
    document.querySelector(".pop-up-image").style.display = "none"
}

document.querySelector(".pop-up-image").onclick = function(){
    document.querySelector(".pop-up-image").style.display = "none"
}