// ==UserScript==
// @name           GC ad blocker
// @namespace      2Abendsegler
// @version        0.3
// @description    Advertising blocker on www.geocaching.com
// @include        http*://www.geocaching.com/*
// @include        http*://labs.geocaching.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// @icon           https://raw.githubusercontent.com/2Abendsegler/GC_ad_blocker/master/images/gc_ad_blocker_logo.png
// @updateURL      https://github.com/2Abendsegler/GC_ad_blocker/raw/master/gc_ad_blocker.user.js
// @copyright      2Abendsegler
// @author         2Abendsegler
// @license        GNU General Public License v2.0
// ==/UserScript==

try {
    $('#ctl00_uxBanManWidget').children().remove();
    $('#div-message-center-ad').remove();
    $('#ctl00_ContentBody_divContentSide').children().remove();
    $('#ctl00_ContentBody_uxBanManWidget').children().remove();
    // account/dashboard
    $('#Content aside#DashboardSidebar .advertisement').remove();
    // play/friendleague
    $('#Content aside #leaderboard-ad').remove();
    // account/lists, account/drafts
    $('#Content aside.sidebar-ad #lists-hub-ad').remove();
    $('#Content aside.sidebar-ad #draft-hub-ad').remove();
    $('#Content aside.sidebar-ad .contact').remove();
} catch (e) {gc_error("error", e);}

function gc_error(modul, err) {
    var txt = "ERROR - " + modul + " - " + document.location.href + ": " + err.message + "\nStacktrace:\n" + err.stack + (err.stacktrace ? ("\n" + err.stacktrace) : "");
    if (typeof(console) != "undefined") console.error(txt);
}
