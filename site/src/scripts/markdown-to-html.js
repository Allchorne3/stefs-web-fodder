import { marked } from 'marked';

const setupMarkdownToHtml = () => {
    const markdownToHTML = document.querySelector('#markdown-to-html')
    const markdownToHTMLInput = markdownToHTML.querySelector(".user-input");
    const markdownToHTMLPreview = markdownToHTML.querySelector(".previewer");
    
    markdownToHTMLInput.addEventListener("input", function() {
        const markdown = markdownToHTMLInput.value;
        const html = marked(markdown); // 'marked' is available as a global variable
        markdownToHTMLPreview.textContent = html;
    });
}

export default {
    setupMarkdownToHtml
}
