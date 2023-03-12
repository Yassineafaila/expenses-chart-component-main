
let xhr=new XMLHttpRequest()
xhr.open("GET", "data.json", true);
xhr.send();
const g = document.querySelector(".graph")
xhr.onreadystatechange = function () {
    data = xhr.responseText;
    dataa = JSON.parse(data)
}
g.addEventListener("click", function (e) {
    e.target.classList.toggle("active")
    for (let i = 0; i < dataa.length; i++){
        if (dataa[i].day === e.target.dataset.day) {
            e.target.dataset.amount = dataa[i].amount;
        }
    }
    e.target.classList.toggle("show");

})

