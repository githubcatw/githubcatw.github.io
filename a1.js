// I keep advertising my patreon, but still 0 patrons.
// This is my last resort.

var tiers=["https://www.patreon.com/join/ntor/checkout?rid=3391157",
           "https://www.patreon.com/join/ntor/checkout?rid=3391158",
           "https://www.patreon.com/join/ntor/checkout?rid=3391155"];

window.onload = function() {
var rt = Math.floor(Math.random() * 2);
window.location.href = tiers[rt];
}