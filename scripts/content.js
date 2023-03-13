// const labelColors = {
//     'qa-by-devs': 'red',
//     'no-qa-needed': 'blue',
//     'qa-seperate': 'purple',
//     'qa-story': 'green',
//     'ip-suggestion': 'darkorange'
// };
let labelColors = {};

async function setDOM() {
    let labels = document.querySelectorAll('[data-tooltip*="Labels:"]:not(.ghx-fa)');
    labels.forEach(label => {
        let labelProp = label.dataset.tooltip;
        let labelText = labelProp.split('Labels: ')[1].toLowerCase();
        // label.classList.add(labelText); // Not Really Needed
        label.style.color = setLabelColor(labelText);
    });
}

function setLabelColor(label) {
    return labelColors[label] ?? '';
}

async function init() {
    await chrome.storage.sync.get('labelColors').then((result) => {
        console.log('get current key -> ', result);
        labelColors = result['labelColors'];
        setDOM();
    });
}

setTimeout(init, 1000);

// chrome.storage.sync.get('labelColor').then((result) => {
//     console.log('get current key -> ', result);
// });

chrome.storage.onChanged.addListener((changes, namespace) => {
    console.group('changes');
    console.log('changes -> ', changes);
    console.log('namespace -> ', namespace);
    console.groupEnd();

    labelColors = changes.labelColors.newValue;
    setDOM();
});