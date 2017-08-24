/**
 * Scrolling behaviour for the app's navigation. the href in the navigator component is mapped to the id
 * in the section component
 */
if (process.BROWSER_BUILD) {
  // document/window are not defined on the server. we will run jQuery on the client
  const $ = require('jquery')
  require('jquery.scrollto') // jQuery plugin for smooth scrolling

  // enable "fixed navigation after scroll" functionality. scroll() will recalculate our variables as the page is scrolled
  $(document).ready(function () {
    $(window).scroll(function () {
      const windowTop = $(window).scrollTop() + 12 // the "12" should equal the margin-top value for nav.stick
      const divTop = $('#nav-anchor').offset().top
      windowTop > divTop ? $('nav').addClass('stick') : $('nav').removeClass('stick')
    })
    // target all a tags inside the nav, and apply scrollto.js to enable smooth scrolling
    $('nav a').click(function (evn) {
      evn.preventDefault()
      $('html,body').scrollTo(this.hash, this.hash)
    })
    // handle the highlighting functionality
    const aChildren = $('nav li').children() // find the a children of the list items
    const aArray = [] // create the empty aArray
    for (var i = 0; i < aChildren.length; i++) {
      const aChild = aChildren[i]
      const ahref = $(aChild).attr('href')
      aArray.push(ahref)
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function () {
      const windowPos = $(window).scrollTop() // get the offset of the window from the top of page
      const windowHeight = $(window).height() // get the height of the window
      const docHeight = $(document).height()

      for (var i = 0; i < aArray.length; i++) {
        const theID = aArray[i]
        const divPos = $(theID).offset().top // get the offset of the div from the top of page
        const divHeight = $(theID).height() // get the height of the div in question
        if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
          $("a[href='" + theID + "']").addClass('nav-active')
        } else {
          $("a[href='" + theID + "']").removeClass('nav-active')
        }
      }

      if (windowPos + windowHeight === docHeight) {
        if (!$('nav li:last-child a').hasClass('nav-active')) {
          const navActiveCurrent = $('.nav-active').attr('href')
          $("a[href='" + navActiveCurrent + "']").removeClass('nav-active')
          $('nav li:last-child a').addClass('nav-active')
        }
      }
    })
  })
}
