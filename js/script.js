function calculate() {
    const form = document.querySelector(".form")
    const output = document.querySelector(".form__output");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const selectElement = document.querySelector(".js-form-select");
        const selectedOption = selectElement.selectedOptions[0];
        const nameAttribute = selectedOption.getAttribute("name");
        const exchangeRate = document.querySelector(".js-form-select").value;
        const amount = document.querySelector(".js-form-input").value;
        const calculatedValue = (amount * exchangeRate).toFixed(2);
        output.innerHTML = `${amount} ${nameAttribute} = ${calculatedValue} PLN`;
    });
}

calculate();

