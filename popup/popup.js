let setButton = document.querySelectorAll('.set-color');
let removeButton = document.querySelectorAll('.remove-color');

let values = {
    'qa-by-devs': 'red',
    'no-qa-needed': 'blue',
    'qa-seperate': 'purple',
    'qa-story': 'green',
    'ip-suggestion': 'darkorange'
};

// function storeColorChoice() {
//     chrome.storage.sync.set({ labelColor: 'blue' }).then(() => {
//         console.log('stored the color');
//     });
// }

// function storeColorChoice2() {
//     chrome.storage.sync.set({ labelColor: 'red' }).then(() => {
//         console.log('stored the color');
//     });
// }

function storeLabelColors() {
    values["no-qa-needed"] = 'blue';
    chrome.storage.sync.set({ labelColors: values}).then(() => {
        console.log('stored hard coded label colors object');
    });
}

function updateLabelColors() {
    values["no-qa-needed"] = 'green';
    chrome.storage.sync.set({ labelColors: values}).then(() => {
        console.log('updated hard coded label colors object');
    });
}

storeLabelColors();

// console.log(setButton);
setButton.forEach((setBtn) => {
    setBtn.addEventListener('click', storeLabelColors);
});

removeButton.forEach((setBtn) => {
    setBtn.addEventListener('click', updateLabelColors);
});