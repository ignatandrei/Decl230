cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "de.mayflower.cordova.android-scrollbar.AndroidScrollbar",
        "file": "plugins/de.mayflower.cordova.android-scrollbar/www/androidscrollbar.js",
        "pluginId": "de.mayflower.cordova.android-scrollbar",
        "clobbers": [
            "mayflower.AndroidScrollbar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "de.mayflower.cordova.android-scrollbar": "0.2.1"
};
// BOTTOM OF METADATA
});