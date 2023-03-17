// ======================= Label Colors ======================================
const labelColorListContainer = document.querySelector('.label-colors-list-container tbody');
const formInputLabel = document.querySelector('#LabelInput');
const formInputColor = document.querySelector('#ColorInput');
const formButtonSave = document.querySelector('.save-color');

let labelColorsValue = {};

// Load the list of Labels and Colors in the DOM
function loadLabelColorList() {
    // Clear the existing label color list
    labelColorListContainer.innerHTML = '';

    Object.entries(labelColorsValue).forEach((labelColor) => {
        const [key, value] = labelColor;
    
        // Create Elements
        let tableTr = document.createElement('tr');
        let tableTdLabel = document.createElement('td');
        let tableTdColor = document.createElement('td');
        let tableTdEdit = document.createElement('td');
        let tableTdDelete = document.createElement('td');
        let tableTdEditButton = document.createElement('button');
        let tableTdDeleteButton = document.createElement('button');
    
        // Hydrate the Elements
        tableTdEditButton.innerHTML = 'Edit';
        tableTdEditButton.classList.add('button', 'is-primary', 'is-small', 'is-light');
        tableTdEditButton.addEventListener('click', () => {
            editLabelColor(key, value);
        });
        tableTdDeleteButton.classList.add('delete');
        tableTdDeleteButton.addEventListener('click', () => {
            deleteLabelColor(key);
        });
        tableTdColor.innerHTML = value;
        tableTdLabel.innerHTML = key;

        // Connect the Elments
        tableTdEdit.append(tableTdEditButton);
        tableTdDelete.append(tableTdDeleteButton);
        tableTr.append(tableTdLabel);
        tableTr.append(tableTdColor);
        tableTr.append(tableTdEdit);
        tableTr.append(tableTdDelete);
        tableTr.classList.add('level');
        tableTr.style.color = value;
    
        // Add it to the DOM
        labelColorListContainer.append(tableTr);
    });
}

// Click function for editing a label color
function editLabelColor(label, color) {
    populateAddField(label, color);
}

// Click funtion for deleting a label color
function deleteLabelColor(label) {
    delete labelColorsValue[label];
    storeLabelColor();
}

// Populats the add label color form fields
function populateAddField(label, color) {
    formInputColor.value = color;
    formInputLabel.value = label;
}

// Click function for saving a label color
function saveLabelColor() {
    labelColorsValue[formInputLabel.value] = formInputColor.value;
    storeLabelColor();
}

// Stores the label colors using the Chrome Storage API
function storeLabelColor() {
    chrome.storage.sync.set({ labelColors: labelColorsValue}).then(() => {
        loadLabelColorList();
    });
}

// Initializes the page functionality
async function init() {
    // Load the label colors from Chrome Storage API
    await chrome.storage.sync.get('labelColors').then((result) => {
        labelColorsValue = result['labelColors'] ?? {};
        loadLabelColorList();
    });

    // Set form funcionality
    formButtonSave.addEventListener('click', saveLabelColor); // ToDo: Change this to be on form submit
}

// Initializing after the DOM Loads
document.addEventListener('DOMContentLoaded', init, false);
