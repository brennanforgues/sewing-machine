/**
  * Scrolling behaviour for the app's navigation. the href in the navigator component is mapped to the id
  * in the section component
*/
import _ from 'lodash'
if (process.browser) {
  const homeElement = document.getElementById('Home')
  const aboutElement = document.getElementById('About')
  const showsElement = document.getElementById('Shows')
  const contactElement = document.getElementById('Contact')
  // capture current site section on scroll
  window.addEventListener('scroll', () => {
    const homePosition = homeElement.getBoundingClientRect().top
    const aboutPosition = aboutElement.getBoundingClientRect().top
    const showsPosition = showsElement.getBoundingClientRect().top
    const contactPosition = contactElement.getBoundingClientRect().top

    const homeSection = {'element': homeElement, 'position': homePosition}
    const aboutSection = {'element': aboutElement, 'position': aboutPosition}
    const showsSection = {'element': showsElement, 'position': showsPosition}
    const contactSection = {'element': contactElement, 'position': contactPosition}

    const array = [homeSection, aboutSection, showsSection, contactSection]
    let closest = _.minBy(array, (o) => Math.abs(o.position))

    console.log('closest:', closest.element)
  })
}
