const rowProperties = [
    { text: "Rad 1", fontSize: "10px", backgroundColor: "#b2f2bb" },
    { text: "Rad 2", fontSize: "15px", backgroundColor: "#8ce99a" },
    { text: "Rad 3", fontSize: "25px", backgroundColor: "#63e6be" },
    { text: "Rad 4", fontSize: "35px", backgroundColor: "#66d9e8" },
    { text: "Rad 5", fontSize: "45px", backgroundColor: "#74c0fc" }
];


rowProperties.forEach(row => {
    const div = document.createElement("div");
    div.classList.add("row");
    div.innerText = row.text;
    div.style.width = row.width;
    div.style.fontSize = row.fontSize;
    div.style.backgroundColor = row.backgroundColor;
    container.appendChild(div);
});