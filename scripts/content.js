// Test: Select id="ghx-header"
console.log("Howdy");

let header = document.querySelector('#ghx-header');
console.log('header => ', header);
header.style.backgroundColor = '#e5e5e5';

let labels = document.querySelectorAll('[data-tooltip*="Labels:"]:not(.ghx-fa)');
console.log('labels => ', labels);
labels.forEach(label => {
    label.style.color = "red";
});