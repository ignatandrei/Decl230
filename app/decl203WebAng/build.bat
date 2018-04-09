call ng build --prod --build-optimizer

robocopy dist ..\decl203Electron\app\dist  /MIR /XD

robocopy dist ..\declCordova\www\dist  /MIR /XD

echo 'modify href FOR CORDOVA TO  .!'
