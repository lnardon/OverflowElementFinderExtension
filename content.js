chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  if (message.txt === "find") {
    let elements = [];
    elements.forEach.call(document.querySelectorAll("*"), (el) => {
      if (el.offsetWidth > document.documentElement.offsetWidth) {
        console.log(`Overflow caused by: ${el}`);
      }
    });
  }
}
