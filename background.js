chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    txt: "find",
  };
  chrome.tabs.sendMessage(tab.id, msg);
}
