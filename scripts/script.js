$(document).ready(function() {
  onlyAnimateOnWeb()

  catalogHeaderSelect()
  typeWriter("Create a minimalist wardrobe with functional clothing that hopefully won't go out of style.", 0)
})

function onlyAnimateOnWeb() {
  if ($(window).width() > 767) {
    fadeOutText()
    closeCard()
  } else {
    $('.product-card').each(function() {
      $(this).find('.full-description').css('display', 'flex')
      $(this).find('.partial-description').css('display', 'none')
      $(this).find('.read-more').css('display', 'none')
      $(this).find('.sidebar-box').css('max-height', '150px')
    })
  }
}


function catalogHeaderSelect() {
  $('.catalog-header').click(function() {
    if (window.location.href == "file:///Users/jackburum/one-day-websites/the-minimalist-wardrobe/index.html" || window.location.href == "file:///Users/jackburum/one-day-websites/the-minimalist-wardrobe/index.html#catalog") {
      $('html, body').animate({
        scrollTop: $('.more-life-container').offset().top
      }, 'slow');
    } else if (window.location.href == "file:///Users/jackburum/one-day-websites/the-minimalist-wardrobe/about.html") {
      window.location.href = "file:///Users/jackburum/one-day-websites/the-minimalist-wardrobe/index.html#catalog"
    } else if (window.location.href == "https://theminimalwardrobe.com/" || window.location.href == "https://theminimalwardrobe.com/index.html" || window.location.href == "https://theminimalwardrobe.com/index.html#catalog") {
      $('html, body').animate({
        scrollTop: $('.more-life-container').offset().top
      }, 'slow');
    } else if (window.location.href == "https://theminimalwardrobe.com/about.html") {
      window.location.href = "https://theminimalwardrobe.com/index.html#catalog"
    }
  })
}

function blurNonSelectedCards(card) {
  $('.not-selected').each(function() {
    $(this).css('animation', 'blurNotSelected 1s linear 0s')
    $(this).css('animation-fill-mode', 'forwards')
    $(this).css('pointer-events', 'none')
  })
}

function closeCard() {
  $('.close-card').click(function() {
    var selectedCard = $('.selected-card')
    $('.selected-card').find('.close-card').css('display', 'none')
    selectedCard.css('animation', 'resetCard 1s linear 0s')
    selectedCard.css('animation-fill-mode', 'forwards')
    removeFullText(selectedCard)
    $('.not-selected').each(function() {
      var notSelectedCards = $(this)
      notSelectedCards.css('animation', 'easeOutBlur 1s linear 0s')
      notSelectedCards.css('animation-fill-mode', 'forwards')
      notSelectedCards.css('pointer-events', 'auto')
      notSelectedCards.find('.read-more').css('display', 'block')

      $('.selected-card').addClass('not-selected')
      $('.selected-card').removeClass('selected-card')
  })
})}

function enlargeCardOnFadedTextClick(card) {
  card.css('animation', 'enlargeAndCenter 1s linear 0s')
  card.css('animation-fill-mode', 'forwards')
}

function showFullText(card) {
  card.find('.full-description').css('display', 'flex')
  card.find('.partial-description').css('display', 'none')
  card.find('.read-more').css('display', 'none')
}

function removeFullText(card) {
  card.find('.full-description').css('display', 'none')
  card.find('.partial-description').css('display', 'flex')
  card.find('.read-more').css('display', 'flex')
}

function typeWriter(text, n) {
  if (n < (text.length)) {
    $('.intro-text').html(text.substring(0, n+1));
    n++;
    setTimeout(function() {
      typeWriter(text, n)
    }, 75);
  }
}

function fadeOutText() {
  var $el, $ps, $up, totalHeight;

  $(".sidebar-box").click(function() {
    var card = $(this).closest('.product-card')
    setTimeout(function() {
      card.find('.close-card').css('display', 'initial')
    }, 1000)
    card.addClass('selected-card')
    card.removeClass('not-selected')
    showFullText(card)
    blurNonSelectedCards()
    enlargeCardOnFadedTextClick(card)

    totalHeight = 0
    $el = $(".sidebar-box .button")
    $p  = $el.parent();
    $up = $p.parent();
    $ps = $up.find("p:not('.read-more')");

    // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
    // $ps.each(function() {
    //   totalHeight += $('p.item-description').outerHeight();
    // });
    //
    // $up.css({
    //     Set height to prevent instant jumpdown when max height is removed
    //     "height": $up.height(),
    //     "max-height": 9999
    //   }).animate({
    //     "height": totalHeight
    //   });

    // fade out read-more
    $p.fadeOut();

    // prevent jump-down
    return false;

  });
}
