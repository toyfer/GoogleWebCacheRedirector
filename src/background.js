chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == "complete" && tab.active) {
      // Check if the tab is a Google search results page
      if (tab.url.startsWith("https://www.google")) {
        // Add click listener to search result links
        chrome.tabs.executeScript({
          code: `
            [].forEach.call(document.querySelectorAll('.r a'), function(link) {
              link.addEventListener('click', function() {
                window.open('https://webcache.googleusercontent.com/search?q=cache:' + this.href);
              });
            });
          `
        });
      }
    }
  });
  