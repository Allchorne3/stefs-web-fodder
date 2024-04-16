const setupLowercase = (container) => {
    const lowercase = document.querySelector(container)
    const lowercaseUserInput = lowercase.querySelector('.user-input')
    const lowercaseOutput = lowercase.querySelector('.previewer')
    
    function toLowerCase(str) {
        return str.toLowerCase()
    }
    
    lowercaseUserInput.addEventListener("input", function() {
        lowercaseOutput.textContent = toLowerCase(lowercaseUserInput.value);
    });
}

export default {
    setupLowercase
}
