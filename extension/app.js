chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    if (message.txt === "incognito") {
        let link = window.location;
        chrome.runtime.sendMessage({
            action: 'go_incognito',
            url: link.href
        })

    }
}