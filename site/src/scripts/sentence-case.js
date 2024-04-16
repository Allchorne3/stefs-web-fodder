const setupSentenceCase = (container) => {
    const sentence = document.querySelector(container)
    const sentenceUserInput = sentence.querySelector('.user-input')
    const sentenceOutput = sentence.querySelector('.previewer')
    
    function capitalizeSentences(text) {
        return text.replace(/(^\w|[.!?]\s+\w)/g, function(sentence) {
            return sentence.toUpperCase();
        });
    }
    
    sentenceUserInput.addEventListener("input", function() {
        sentenceOutput.textContent = capitalizeSentences(sentenceUserInput.value);
    });
}

export default {
    setupSentenceCase
}
