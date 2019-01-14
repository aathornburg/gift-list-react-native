require("child_process").exec(
    require('os').homedir() + '/AppData/Local/Android/Sdk/tools/emulator.exe -avd Nexus_5X_API_27',
    function(err, data) {
        console.log(err);
        console.log(data);
    }
);