let inp_box = document.querySelectorAll(".inp_box");
let label_inp = document.querySelectorAll(".label_inp");
let input_ui = document.querySelectorAll(".input_ui");

inp_box.forEach(function(item, index) {
    item.addEventListener("click", function() {
        item.classList.toggle("py-[22px]");
        item.classList.toggle("py-[12px]");
        input_ui[index].classList.toggle("h-0")
        input_ui[index].classList.toggle("h-2.5")
        input_ui[index].classList.toggle("mt-3")
    });
});
