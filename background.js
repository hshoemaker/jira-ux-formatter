// function getTabId() {

// }

// chrome.scripting.insertCSS({
//     files: ["styles/labels.css"],
//     target: {tabId: getTabId()}
// });

chrome.storage.onChanged.addListener((changes, namespace) => {
    // let [key, { oldValue, newValue}] = Object.entries(changes);
    console.group('changes');
    console.log('changes -> ', changes);
    // console.log('key -> ', key);
    // console.log('oldValue -> ', oldValue);
    // console.log('newValue -> ', newValue);
    console.log('namespace -> ', namespace);
    console.groupEnd();
    // if (namespace === 'sync' && changes.options?.newValue) {
    //     console.log(changes.options.newValue.debug)
    // }
});