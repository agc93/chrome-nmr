var oldGames = ['skyrim', 'tes', 'oblivion', 'skyrim']

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      var urlMatch = /^https?:\/\/([^\/]+)([\S\s]*)/.exec(details.url);
      var host = urlMatch[1].split('.')[0];
      var path = urlMatch[2];
      // console.log('parsed URL for redirection: ' + host + path);
      if (oldGames.includes(host)) {
        return {redirectUrl: `https://nexusmods.com/${host}${path}`};
      }
    },
    {
        urls: [
            "*://*.nexusmods.com/*",
            "*://*.tesnexus.com/*"
        ],
        types: ["main_frame", "sub_frame"]
    },
    ["blocking"]
);