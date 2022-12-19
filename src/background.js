chrome.webRequest.onBeforeRequest.addListener(
  function (details) { // Webリクエストが送信される前に実行されるコールバック関数
    var url = new URL(details.url); // URLオブジェクトを生成
    if (url.searchParams.has("q") && url.searchParams.has("oq")) { // Google検索リンクを識別するためのURLパラメータを確認
      // This is a Google search result link
      var cacheUrl = "https://webcache.googleusercontent.com/search?q=cache:" + url.href; // キャッシュURLを生成
      return { redirectUrl: cacheUrl }; // 新しいURLにリダイレクト
    }
  },
  { urls: ["*://www.google.com/search/*"] }, // Google検索リンクをクリックする前にリクエストを確認するためのフィルター
  ["blocking"] // リクエストを完全にブロックするためのフラグ
);