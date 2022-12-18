// Set initial state of toggle
chrome.storage.sync.get(['enabled'], function(result) {
    document.querySelector('.toggle').checked = result.enabled;
  });
  
  // Update state of toggle
  document.querySelector('.toggle').addEventListener('change', function(event) {
    chrome.storage.sync.set({enabled: event.target.checked});
  });
  