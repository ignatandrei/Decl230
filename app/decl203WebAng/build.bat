 call ng build --prod --build-optimizer


 robocopy dist ..\decl203Cordova\www\dist  /MIR /XD

 echo '!!!modify href FOR CORDOVA TO  .!'

pause
 robocopy dist ..\decl203Electron\app\dist  /MIR /XD
cd ..\decl203Electron

 call npm run release

 copy dist\*.* ..\decl203WebAng\dist\  /MIR /XD

rmdir ..\decl203WebAng\dist\electron\win-unpacked\ /s /q

cd ..\decl203WebAng


node node_modules\angular-cli-ghpages\bin\angular-cli-ghpages

