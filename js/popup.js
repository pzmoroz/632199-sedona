var btn = document.querySelector('.search-form-button');
var popup = document.querySelector('.search-modal');
var form = popup.querySelector('form');

var searchFrom = document.querySelector('[name=search-date-from]');
var searchTo = document.querySelector('[name=search-date-to]');
var searchAdults = document.querySelector('[name=search-adults]');
var searchKids = document.querySelector('[name=search-kids]');

var isStorageSupport = true;
var storedSearchFrom = '';
var storedSearchTo = '';
var storedSearchAdults = '';
var storedSearchKids = '';

try {
  storedSearchFrom = localStorage.getItem('searchFrom');
  storedSearchTo = localStorage.getItem('searchTo');
  storedSearchAdults = localStorage.getItem('searchAdults');
  storedSearchKids = localStorage.getItem('searchKids');
} catch (err) {
  isStorageSupport = false;
}

var mapImage = document.querySelector('.town-map img');
mapImage.style.display = 'none';
var mapIframe = document.querySelector('.town-map iframe');
mapIframe.style.display = 'block';

popup.classList.remove('search-modal-show');
popup.classList.add('search-modal-close');

btn.addEventListener('click', function (evt) {
  evt.preventDefault();

  var isVisible = popup.classList.contains('search-modal-show');
  if(isVisible) {
    popup.classList.remove('search-modal-show');
    popup.classList.add('search-modal-close');
  }
  else {
    popup.classList.remove('search-modal-close');
    popup.classList.add('search-modal-show');
  }
});

form.addEventListener('submit', function (evt) {
  if (!searchFrom.value || !searchTo.value || !searchAdults.value || !searchKids.value) {
    evt.preventDefault();
    popup.classList.remove('search-modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('search-modal-error');
  }
  else {
    if(isStorageSupport) {
      localStorage.setItem('searchFrom', searchFrom.value);
      localStorage.setItem('searchTo', searchTo.value);
      localStorage.setItem('searchAdults', searchAdults.value);
      localStorage.setItem('searchKids', searchKids.value);
    }
  }
});
