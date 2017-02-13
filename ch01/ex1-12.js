// Example 1-12. Race condition

var async = true;
var xhr = new XMLHttpRequest();
xhr.open('get', 'data.json', async);
xhr.send();

setTimeout(function delayed() { // Creates race condition!
    function listener() {
	console.log('greetings from listener');
    }
    xhr.addEventListener('load', listener);
    xhr.addEventListener('error', listener);
}, 3000);
