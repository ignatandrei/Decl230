call ng build --prod --build-optimizer

rem node node_modules\angular-cli-ghpages\bin\angular-cli-ghpages
robocopy dist ..\decl203Cordova\www\dist  /MIR /XD

%localappdata%\Android\Sdk\emulator.exe -list-avds
%localappdata%\Android\Sdk\emulator.exe -avd Nexus_5X_API_27_x86


rem pause
rem robocopy dist ..\decl203Electron\app\dist  /MIR /XD
rem cd ..\decl203Electron

rem call npm run release

rem copy dist\*.* ..\decl203WebAng\dist\  /MIR /XD

rem rmdir ..\decl203WebAng\dist\electron\win-unpacked\ /s /q

rem cd ..\decl203WebAng

