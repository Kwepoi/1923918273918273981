// Disable Pocket core functionality
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.oAuthConsumerKeyBff", "");
user_pref("extensions.pocket.bffApi", "");

// Disable Pocket in new tab page and discovery stream
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.saveToPocketCard.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sendToPocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.pocket-feed-parameters", "");
user_pref("browser.newtabpage.activity-stream.pocketCta", "");

// Disable Pocket in URL bar
user_pref("browser.urlbar.pocket.featureGate", false);
user_pref("browser.urlbar.suggest.pocket", false);

// Disable additional Pocket features
user_pref("extensions.pocket.bffRecentSaves", false);
user_pref("extensions.pocket.showHome", false);
user_pref("extensions.pocket.refresh.emailButton.enabled", false);
user_pref("extensions.pocket.refresh.hideRecentSaves.enabled", false);
user_pref("extensions.pocket.loggedOutVariant", "");

// Disable Pocket sync settings
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("services.sync.prefs.sync-seen.browser.newtabpage.activity-stream.section.highlights.includePocket", false);

// Disable Firefox View
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.firefox-view.view-count", 0);
user_pref("browser.tabs.firefox-view.notify-for-tabs", false);
user_pref("browser.firefox-view.feature-tour", "");
user_pref("browser.tabs.firefox-view.logLevel", "Off");
user_pref("services.sync.prefs.sync.browser.firefox-view.feature-tour", false);
