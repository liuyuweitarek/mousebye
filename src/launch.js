var style = document.createElement('style');
style.innerHTML =
    '* {' + 
        'cursor:None' +
    '}';
var ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);