const setupUppercase = (container) => {
    const uppercase = document.querySelector(container)
    const uppercaseUserInput = uppercase.querySelector('.user-input')
    const uppercaseOutput = uppercase.querySelector('.previewer')
    
    function toUpperCase(str) {
        return str.toUpperCase()
    }
    
    uppercaseUserInput.addEventListener("input", function() {
        uppercaseOutput.textContent = toUpperCase(uppercaseUserInput.value);
    });
}

export default {
    setupUppercase
}
