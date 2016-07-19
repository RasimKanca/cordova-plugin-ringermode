var ringerModeExport = {};

ringerModeExport.getRingerMode = function(successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "ringerMode", "getRingerMode", []);
};

module.exports = ringerModeExport;
