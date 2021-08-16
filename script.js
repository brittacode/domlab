let total = document.queryselector(".total")
 buttonContainer.addEventListener("click", (event) => {
     if (event.target.classList.contains("button")) {
       let amount = Number(event.target.getAttribute("data-amount"));
       console.log(amount);
        currentTotal += amount;
        total.innerText = `Total: ${currentTotal.toFixed(2)}`
    }
 } 