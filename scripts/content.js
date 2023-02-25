const labelColors = {
    'qa-by-devs': 'red',
    'no-qa-needed': 'blue',
    'qa-seperate': 'purple',
    'qa-story': 'green',
    'ip-suggestion': 'darkorange'
};

let labels = document.querySelectorAll('[data-tooltip*="Labels:"]:not(.ghx-fa)');
labels.forEach(label => {
    let labelProp = label.dataset.tooltip;
    let labelText = labelProp.split('Labels: ')[1].toLowerCase();
    // label.classList.add(labelText); // Not Really Needed
    label.style.color = setLabelColor(labelText);
});

function setLabelColor(label) {
    return labelColors[label] ?? '';
}