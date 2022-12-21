// Keep track of whether the extension is enabled or not
let enabled = true;

// Toggle the enabled state when the browser action icon is clicked
chrome.browserAction.onClicked.addListener(() => {
  enabled = !enabled;
});

// Replace links with Google Web Cache versions
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
        // Only modify non-Google domains
        if (!details.url.includes("google")) {
            return {
              redirectUrl: `https://webcache.googleusercontent.com/search?q=cache:${details.url}`
            };
          }
        },
        { urls: ["*://*/*"] },
        ["blocking"]
      );
      
