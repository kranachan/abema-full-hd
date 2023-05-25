chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [614],
    addRules: [
      {
        id: 614,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            regexSubstitution: "1080/playlist.m3u8",
          },
        },
        condition: {
          requestMethods: ["get"],
          initiatorDomains: ["abema.tv"],
          requestDomains: ["vod-abematv.akamaized.net"],
          regexFilter: "(180|240|480|720)/playlist.m3u8",
        },
      },
    ],
  });
});
