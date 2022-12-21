// 拡張機能のON/OFF状態を管理する
let enabled = true;

chrome.storage.sync.get(['enabled'], function (result) {
    enabled = result.enabled;
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'toggle') {
        enabled = !enabled;
        chrome.storage.sync.set({ enabled: enabled });
        chrome.runtime.sendMessage({ message: 'status', enabled: enabled });
    }
});

// Googleの遷移先のページがGoogle以外のサイトだった場合
if (enabled) {
    let nowurl = location.href;
    if (!nowurl.startsWith('https://www.google.com')) {
        window.location.replace("https://www.google.com/search?q=" + "cache:" + nowurl);
    }
}