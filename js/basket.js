const btnadd = document.querySelector(".positive");
const btnremove = document.querySelector(".negative");
const number = document.querySelector(".number");
const div = document.querySelector(".crt");

let nbr = 0;

div.addEventListener("click", () => {
    btnadd.style.display = ("block");
    btnremove.style.display = ("block");
})

btnadd.addEventListener("click", () => {
    nbr++
    number.textContent = (nbr);
    if (nbr >= 1) {
        number.style.display = ("block")
    }
})
btnremove.addEventListener("click", (test) => {
    nbr--
    number.textContent = (nbr);
    if (nbr <= 0) {
        number.style.display = ("none"); 
        // btnadd.style.display = ("none");
        // btnremove.style.display = ("none");
    }
    if (nbr <= -1) {
        nbr++;
       
    }
})