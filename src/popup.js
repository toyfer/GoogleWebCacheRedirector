// 拡張機能のON/OFFを切り替える
document.getElementById('toggle-button').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { message: 'toggle' });
    });
});

// content.jsからの通知を受け取り、ON/OFF状態を更新する
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'status') {
        if (request.enabled) {
            document.getElementById('toggle-button').innerText = 'ON';
            document.getElementById('status').innerText = 'Status: ON';
        } else {
            document.getElementById('toggle-button').innerText = 'OFF';
            document.getElementById('status').innerText = 'Status: OFF';
        }
    }
});
