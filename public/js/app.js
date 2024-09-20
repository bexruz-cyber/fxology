let list_item = document.querySelectorAll(".list_item");
let list_border_b = document.querySelectorAll(".list_border_b");
let list_svg = document.querySelectorAll(".list_svg");
let list_text = document.querySelectorAll(".list_text");
let search = document.querySelector("#search");
let list_tooggle = document.querySelector(".list_tooggle");
let list_modal = document.querySelector(".list_modal");
let list_state_toogle_modal = document.querySelector(
  ".list_state_toogle_modal"
);
let list_state_modal = document.querySelector(".list_state_modal");
let country = document.querySelector(".country");
let state = document.querySelector(".state");
let list_state_text = document.querySelectorAll(".list_state_text");
let list_state_item = document.querySelectorAll(".list_state_item");
let list_state_svg = document.querySelectorAll(".list_state_svg");
let list_state_border_b = document.querySelectorAll(".list_state_border_b");

list_tooggle.addEventListener("click", function () {
  // toggle top-[150px] va top-[66px] sinflarini o'zaro almashtirish
  if (list_modal.classList.contains("h-0")) {
    list_modal.classList.remove("h-0", "border", "border-transparent");
    list_modal.classList.add("h-[345px]", "border", "border-[#FFFFFF1A]");
    list_modal.classList.remove("mt-0");
    list_modal.classList.add("mt-[11px]");
    list_state_modal.classList.remove(
      "h-[345px]",
      "border",
      "border-[#FFFFFF1A]"
    );
    list_state_modal.classList.add("h-0", "border", "border-transparent");
    list_state_modal.classList.remove("mt-[11px]");
    list_state_modal.classList.add("mt-0");
  } else {
    list_modal.classList.remove("h-[345px]", "border", "border-[#FFFFFF1A]");
    list_modal.classList.add("h-0", "border", "border-transparent");
    list_modal.classList.remove("mt-[11px]");
    list_modal.classList.add("mt-0");
  }
});

list_state_toogle_modal.addEventListener("click", function () {
  // toggle top-[150px] va top-[66px] sinflarini o'zaro almashtirish
  if (list_state_modal.classList.contains("h-0")) {
    list_state_modal.classList.remove("h-0", "border", "border-transparent");
    list_state_modal.classList.add("h-[345px]", "border", "border-[#FFFFFF1A]");
    list_state_modal.classList.remove("mt-0");
    list_state_modal.classList.add("mt-[11px]");
    list_modal.classList.add("h-0", "border", "border-transparent");
    list_modal.classList.add("mt-0");
  } else {
    list_state_modal.classList.remove(
      "h-[345px]",
      "border",
      "border-[#FFFFFF1A]"
    );
    list_state_modal.classList.add("h-0", "border", "border-transparent");
    list_state_modal.classList.remove("mt-[11px]");
    list_state_modal.classList.add("mt-0");
    list_modal.classList.remove("h-[345px]", "border", "border-[#FFFFFF1A]");
    list_modal.classList.add("h-0", "border", "border-transparent");
    list_modal.classList.remove("mt-[11px]");
    list_modal.classList.add("mt-0");
  }
});

list_item.forEach(function (item, index) {
  item.addEventListener("click", function () {
    list_item.forEach(function (item) {
      item.classList.remove("list_item_active");
    });
    list_svg.forEach(function (item) {
      item.classList.remove("list_svg_active");
    });
    list_border_b.forEach(function (item) {
      item.classList.remove("list_border_b_active");
    });
    list_border_b[index].classList.toggle("list_border_b_active");
    list_svg[index].classList.toggle("list_svg_active");
    list_item[index].classList.toggle("list_item_active");
    country.textContent = list_text[index].textContent;
  });
});

list_state_item.forEach(function (item, index) {
  item.addEventListener("click", function () {
    list_state_item.forEach(function (item) {
      item.classList.remove("list_item_active");
    });
    list_state_svg.forEach(function (item) {
      item.classList.remove("list_svg_active");
    });
    list_state_border_b.forEach(function (item) {
      item.classList.remove("list_border_b_active");
    });
    list_state_border_b[index].classList.toggle("list_border_b_active");
    state.textContent = list_state_text[index].textContent;
    list_state_svg[index].classList.toggle("list_svg_active");
    list_state_item[index].classList.toggle("list_item_active");
  });
});
