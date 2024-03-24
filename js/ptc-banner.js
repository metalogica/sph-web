var stickBannerContainer = document.querySelector('.sticky-banner');
var closeButton = document.getElementById('sticky-banner-close-button');

closeButton.addEventListener('click', function(event) {
  stickBannerContainer.classList.add('sticky-banner-fade-out');
});
