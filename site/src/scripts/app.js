import SplitType from 'split-type'
import { gsap } from "gsap";

import Accordion from './accordion'
import Kebab from './kebabify'
import Lowercase from './lowercase'
import Uppercase from './uppercase'
import SentenceCase from './sentence-case'
import MarkdownPreviewer from './markdown-previewer'
import MarkdownToHtml from './markdown-to-html'

document.addEventListener('DOMContentLoaded', () => {
	// Hero title text animations
	const title = new SplitType('.banner-title_text', { types: 'lines' })

	gsap.to('.line', {
		y: 0,
		stagger: .1,
		duration: .5,
		ease: "expoScale(0.5,7,none)",
	})


	// Nav item animations
	const navItems = document.querySelectorAll('#nav li a')
	// const fodderHeaders = document.querySelectorAll('.accordion_header h2')

	if(window.matchMedia("(min-width: 899px)").matches) {
		navItems.forEach((item, index) => {
			setTimeout(() => {
				item.classList.add('appear')
			}, 100 * index)
		});
	}

	// if(window.matchMedia("(max-width: 899px)").matches) {
	// 	fodderHeaders.forEach((item, index) => {
	// 		setTimeout(() => {
	// 			item.classList.add('appear')
	// 		}, 100 * index)
	// 	});
	// }


	// Function imports
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
