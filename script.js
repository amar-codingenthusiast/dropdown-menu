let listItems = document.querySelectorAll("li");
let buttonText = document.querySelector("#text");
listItems.forEach(item => {
    item.addEventListener("click", () => buttonText.innerText = item.innerText
    );
});