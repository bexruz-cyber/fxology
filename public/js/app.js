let inp_box = document.querySelectorAll(".inp_box");
let label_inp = document.querySelectorAll(".label_inp");
let input_ui = document.querySelectorAll(".input_ui");

inp_box.forEach(function(item, index) {
    item.addEventListener("click", function() {
        item.classList.toggle("py-[22px]");
        item.classList.toggle("py-[12px]");
        input_ui[index].classList.toggle("h-0");
        input_ui[index].classList.toggle("h-2.5");
        input_ui[index].classList.toggle("mt-3");
        input_ui[index].focus();
    });
});

const api = "https://restcountries.com/v3.1/all";

// API'dan ma'lumot olish
fetch(api)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // JSON formatda ma'lumotlarni qaytaradi
    })
    .then(data => {
        console.log(data); // Barcha davlatlar haqidagi ma'lumotlarni konsolga chiqaradi
        // Ma'lumotlarni qayta ishlash yoki UI'ga qo'shish uchun kod yozish mumkin.
    })
    .catch(error => {
        console.error('Error:', error); // Xatolik bo'lsa, uni konsolga chiqaradi
    });
