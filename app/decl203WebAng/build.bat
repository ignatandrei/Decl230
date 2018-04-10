call ng build --prod --build-optimizer
node node_modules\angular-cli-ghpages\bin\angular-cli-ghpages
rem robocopy dist ..\decl203Electron\app\dist  /MIR /XD

robocopy dist ..\decl203Cordova\www\dist  /MIR /XD

rem echo 'modify href FOR CORDOVA TO  .!'
