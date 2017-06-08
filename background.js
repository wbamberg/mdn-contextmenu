browser.contextMenus.create({
  id: "mdn-edit-page",
  title: "Edit page",
  contexts: ["all"],
  checked: false,
  documentUrlPatterns: ["*://developer.mozilla.org/*", "*://developer.allizom.org/*"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  browser.tabs.update({url: tab.url+"$edit"});
});
