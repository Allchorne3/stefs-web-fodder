import Accordion from './accordion'
import Kebab from './kebabify'
import Lowercase from './lowercase'
import Uppercase from './uppercase'
import SentenceCase from './sentence-case'
import MarkdownPreviewer from './markdown-previewer'
import MarkdownToHtml from './markdown-to-html'

document.addEventListener('DOMContentLoaded', () => {

	if(window.matchMedia("(max-width: 899px)").matches) {
		Accordion.setupAccordion()
    }

	Kebab.setupKebabify('#kebabify')
	Lowercase.setupLowercase('#lowercase')
	Uppercase.setupUppercase('#uppercase')
	SentenceCase.setupSentenceCase('#sentence-case')
	MarkdownPreviewer.setupMarkdownPreviewer('#markdown-previewer')
	MarkdownToHtml.setupMarkdownToHtml('#markdown-to-html')
})
