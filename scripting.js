function createParagraph() {
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p")
    const para3 = document.createElement("p")
    para.textContent = "Another day, going to the gym";
    para1.textContent = "Putting my absoulte body to failure";
    para2.textContent = "Eat food till failure";
    para3.textContent = "Sleeping to recover";
    document.body.appendChild(para);
    document.body.appendChild(para1);
    document.body.appendChild(para2);
    document.body.appendChild(para3);
}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}