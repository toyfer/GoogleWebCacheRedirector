// 拡張機能のON/OFF状態を管理する
let extesionStatus = null;

chrome.storage.sync.get(['extesionStatus'], function (result) {
    extesionStatus = result.extesionStatus;

    // Googleの遷移先のページがGoogle以外のサイトだった場合
    if (extesionStatus) {
        let nowurl = location.href;
        if (!nowurl.startsWith('https://www.google.com')) {
            window.location.replace("https://www.google.com/search?q=" + "cache:" + nowurl);
        }
    }
});

// popup.jsからの通知を受け取り反映する
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'toggle') {
        extesionStatus = !extesionStatus;
        chrome.storage.sync.set({ extesionStatus: extesionStatus });
        chrome.runtime.sendMessage({ message: 'status', extesionStatus: extesionStatus });
    }
});