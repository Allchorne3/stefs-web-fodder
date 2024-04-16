const setupKebabify = (container) => {
    const kebab = document.querySelector(container)
    const kebabUserInput = kebab.querySelector('.user-input')
    const kebabOutput = kebab.querySelector('.previewer')

    const kebabify = function (string) {
        return String(string)
            .normalize('NFKD').replace(/[\u0300-\u036F]/g, '')
            .replace(/[?!&’'"]/g, '')
            .replace(/[\s_.:]+/g, '-')
            .toLowerCase();
    };

    kebabUserInput.addEventListener("input", function() {
        kebabOutput.textContent = kebabify(kebabUserInput.value);
    });
}

export default {
    setupKebabify
}
