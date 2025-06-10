
/* Overrides */

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

// Disable Fxaccounts
user_pref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");
user_pref("identity.fxaccounts.auth.uri", "");
user_pref("identity.fxaccounts.autoconfig.uri", "");
user_pref("identity.fxaccounts.commands.missed.fetch_interval", 0);
user_pref("identity.fxaccounts.commands.remoteTabManagement.enabled", false);
user_pref("identity.fxaccounts.contextParam", "");
user_pref("identity.fxaccounts.enabled", false);
user_pref("identity.fxaccounts.migrateToDevEdition", false);
user_pref("identity.fxaccounts.oauth.enabled", false);
user_pref("identity.fxaccounts.pairing.enabled", false);
user_pref("identity.fxaccounts.remote.oauth.uri", "");
user_pref("identity.fxaccounts.remote.pairing.uri", "");
user_pref("identity.fxaccounts.remote.profile.uri", "");
user_pref("identity.fxaccounts.remote.root", "");
user_pref("identity.fxaccounts.toolbar.accessed", false);
user_pref("identity.fxaccounts.toolbar.defaultVisible", false);
user_pref("identity.fxaccounts.toolbar.enabled", false);
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled", false);
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.monitorEnabled", false);
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.relayEnabled", false);
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.vpnEnabled", false);
user_pref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", false);

// Browser aesthetic integrations
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.toolbars.bookmarks.visibility", "never");
user_pref("browser.uidensity", 1);
user_pref("browser.download.autohideButton", false);
user_pref("ui.key.menuAccessKeyFocuses", false);
user_pref("ui.key.menuAccessKey", 0);

// Enhances
user_pref("browser.startup.page", 3);
user_pref("browser.sessionstore.resume_from_crash", true);
user_pref("browser.sessionstore.max_resumed_crashes", 2);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("image.jxl.enabled", true);
// user_pref("gfx.wayland.hdr", true); // too unstable

// Safety considerations
user_pref("app.update.auto", false);
user_pref("security.sandbox.gpu.level", 1);
user_pref("security.sandbox.content.level", 4);
user_pref("extensions.update.enabled", false);
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("extensions.update.url", "");
user_pref("extensions.update.background.url", "");
user_pref("services.sync.prefs.sync.extensions.update.enabled", false);
