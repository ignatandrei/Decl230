call cordova build android --release
start /b /wait /d . CMD /c %localappdata%\Android\Sdk\build-tools\27.0.3\apksigner.bat sign -ks D:\github\all.jks platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk

start /b /wait /d . CMD /c %localappdata%\Android\Sdk\build-tools\27.0.3\apksigner.bat verify --verbose platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk

explorer platforms\android\app\build\outputs\apk\release\