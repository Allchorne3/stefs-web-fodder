// Function to calculate the height of the accordion when opened
function getContentHeight(accordion) {
	const accordionInner = accordion.querySelector('.accordion_content-inner') 
	if(accordion.classList.contains('is-open')) return 0
	return accordionInner.getBoundingClientRect().height
}

// Function to update the accordion. To open the accordion and apply the correct height
function updateAccordion(accordion, height) {
	const accordionContent = accordion.querySelector('.accordion_content')
	// Update the accordion to open/close
	accordion.classList.toggle('is-open')
	accordionContent.style.height = `${height}px`
}

const setupAccordion = () => {
	const accordionContainer = document.querySelector('.accordion-container')

    if(!accordionContainer) {
        console.warn('No accordion container can be found')
        return;
    }

	accordionContainer.addEventListener('click', e => {
		const accordionHeader = e.target.closest('.accordion_header')
		if(!accordionHeader) return

		const accordion = accordionHeader.parentElement
		const height = getContentHeight(accordion)
		updateAccordion(accordion, height)
	})
}

export default {
    setupAccordion
}
