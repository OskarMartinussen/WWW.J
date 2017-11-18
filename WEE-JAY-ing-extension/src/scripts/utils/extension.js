import ext from "./ext";

const nope = () => {};

export const getTabs = (callback=nope) =>
  ext.tabs.query({currentWindow: true}, callback);

export const getActiveTabs = (callback=nope) =>
  ext.tabs.query({currentWindow: true, active: true}, callback);

export const getCurrentTab = (callback=nope) =>
  ext.tabs.query({currentWindow: true, active: true}, (tabs) => callback(tabs[0]));

export const createNewTab = (url) => {
  ext.tabs.create({'url': url});
};

export const sendMessageToContent = (message, callback=nope) => {
  getCurrentTab((currentTab)=>{
    chrome.tabs.sendMessage(currentTab.id, message, callback);
  })
};

export const sendMessageToBackground = (message, callback=nope) => {
  ext.runtime.sendMessage(message, callback);
};

export const onMessage = (callback=nope) => {
  ext.runtime.onMessage.addListener( callback );
};