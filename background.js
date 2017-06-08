browser.contextMenus.create({
  id: "mdn-edit-page",
  title: "Edit page",
  contexts: ["all"],
  checked: false
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  browser.tabs.update({url: tab.url+"$edit"});
});
