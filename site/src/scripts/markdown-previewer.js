import { marked } from 'marked';

const setupMarkdownPreviewer = (container) => {
    const markdown = document.querySelector(container)
    const markdownInput = markdown.querySelector(".user-input");
    const preview = markdown.querySelector(".previewer");
    
    markdownInput.addEventListener("input", function() {
        const html = marked(markdownInput.value);
        preview.innerHTML = html;
    });
}

export default {
    setupMarkdownPreviewer
}
