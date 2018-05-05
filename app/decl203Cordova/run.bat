echo do not forget to run emulator
rem %localappdata%\Android\sdk\emulator\emulator.exe -list-avds
rem start %localappdata%\Android\sdk\emulator\emulator.exe -avd Nexus_5X_API_27_x86
call cordova build android --debug
call cordova run android