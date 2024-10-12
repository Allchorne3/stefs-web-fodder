import SplitType from 'split-type'
import { gsap } from "gsap";

// import Accordion from './accordion'
import Kebab from './kebabify'
import Lowercase from './lowercase'
import Uppercase from './uppercase'
import SentenceCase from './sentence-case'
import MarkdownPreviewer from './markdown-previewer'
import MarkdownToHtml from './markdown-to-html'

document.addEventListener('DOMContentLoaded', () => {
	const title = new SplitType('.banner-title_text', { types: 'chars' })

	const hamburger = document.querySelector('.navbar-burger');
	const menuItem = document.querySelectorAll('#nav li a');
	
	hamburger.addEventListener('click', e => {
		document.documentElement.classList.toggle('has-menu-active');
		handleNavAnimation();
	});
	
	function handleNavAnimation() {
		menuItem.forEach((item, index) => {
			if (window.matchMedia("(min-width: 999px)").matches) {
				animateNavItems('appear', item, index);
			}
	
			if (window.matchMedia("(max-width: 999px)").matches) {
				if (document.documentElement.classList.contains('has-menu-active')) {
					animateNavItems('appear', item, index);
				} else {
					item.classList.remove('appear')
				}
			}
		});
	}

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			document.documentElement.classList.remove('has-menu-active');
			handleNavAnimation();
		});
	});
	
	if(window.matchMedia("(min-width: 999px)").matches) {
		animateChars('.char')

		handleNavAnimation();	
	}

	// Copy to clipboard functionality
	const copyButtons = document.querySelectorAll('button.copy')

	for(const button of copyButtons) {
		const parent = button.parentElement.parentElement.parentElement
		const input = parent.querySelector('.user-input')
		const previewer = parent.querySelector('.previewer')
		button.disabled = true

		input.addEventListener('keyup', () => {
			button.disabled = previewer.value !== '' ? false : true
		})
		
		button.addEventListener('click', function(e) {
			e.preventDefault()
			copyToClipboard(previewer, parent)
		})
	}

	Kebab.setupKebabify('#kebabify')
	Lowercase.setupLowercase('#lowercase')
	Uppercase.setupUppercase('#uppercase')
	SentenceCase.setupSentenceCase('#sentence-case')
	MarkdownPreviewer.setupMarkdownPreviewer('#markdown-previewer')
	MarkdownToHtml.setupMarkdownToHtml('#markdown-to-html')
})


function animateNavItems(className, item, index) {
	setTimeout(() => {
		item.classList.add(className);
	}, 100 * index)
}

function animateChars(char) {
	gsap.to(char, {
		y: 0,
		stagger: .03,
		duration: .2,
		ease: "expoScale(0.5,7,none)",
	})
}

function copyToClipboard(el, parent) {
	if(!el.value) {
		console.log(`No text to be copied from ${parent.id} output`)
		return;
	}

	navigator.clipboard.writeText(el.value).then(() => {
		parent.querySelector('.copy').classList.add('success')

		setTimeout(() => {
			parent.querySelector('.copy').classList.remove('success')
		}, 1000)
	}).catch(() => {
		console.error(`Could not copy text: ${error}`)
	})
}

function successFail(container, el, className) {
	container.querySelector(el).classList.add(className)
	setTimeout(() => {
		container.querySelector(el).classList.remove(className)
	}, 1000)
}