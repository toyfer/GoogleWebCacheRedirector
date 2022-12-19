document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById("enabled");
    chrome.storage.sync.get("enabled", function(items) {
      checkbox.checked = items.enabled;
    });
    checkbox.addEventListener("change", function() {
      chrome.storage.sync.set({enabled: checkbox.checked});
    });
  });
  