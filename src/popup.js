const toggle = document.getElementById("toggle");

// Get current extension state
chrome.storage.sync.get("enabled", function(result) {
  toggle.checked = result.enabled;
});

// Update extension state when toggle is clicked
toggle.addEventListener("click", function() {
  chrome.storage.sync.set({ enabled: toggle.checked });
});
