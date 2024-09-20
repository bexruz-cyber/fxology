let list_item = document.querySelectorAll(".list_item")
let list_border_b = document.querySelectorAll(".list_border_b")
let list_svg = document.querySelectorAll(".list_svg")
let list_text = document.querySelectorAll(".list_text")
let search = document.querySelector("#search")
let list_tooggle = document.querySelector(".list_tooggle")
let list_modal = document.querySelector(".list_modal")


list_tooggle.addEventListener("click", function(){
    list_modal.classList.toggle("list_modal_active")
})
list_item.forEach(function(item , index){
    item.addEventListener("click" , function(){
        list_item.forEach(function(item){
            item.classList.remove("list_item_active")
        })
        list_svg.forEach(function(item){
            item.classList.remove("list_svg_active")
        })
        search.value = list_text[index].textContent
        list_svg[index].classList.toggle("list_svg_active")
        list_item[index].classList.toggle("list_item_active")
    })
})