chrome.declarativeNetRequest.onRequest.addListener(
  function(details) {
    var url = new URL(details.url);
    if (url.searchParams.has("q") && url.searchParams.has("oq")) {
      // This is a Google search result link
      var cacheUrl = "https://webcache.googleusercontent.com/search?q=cache:" + url.href;
      return {redirectUrl: cacheUrl};
    }
  },
  {urls: ["*://www.google.com/search*"]}
);