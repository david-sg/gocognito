/*
 * Runs an action in background.
 *
 * Actions:
 *   - CREATE_INCOGNITO_WINDOW: opens the current tab in a new incognito window
 *
 * Fired when the icon is clicked`.
 */


console.log('background started')



// chrome.browserAction.onClicked.addListener(buttonClicked)
chrome.action.onClicked(buttonClicked)
function buttonClicked(tab) {

    let msg = {
        txt: "incognito"
    }
    chrome.tabs.sendMessage(tab.id, msg)
}

chrome.runtime.onMessage.addListener(({ action, url }) => {
    if (action === 'go_incognito') {
        chrome.windows.create({
            url,
            incognito: true
        })
    }
})
