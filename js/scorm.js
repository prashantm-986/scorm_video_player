console.log("SCORM module loaded");

// SCORM API object
let scormAPI = null;

// Find the SCORM API provided by Moodle
function findAPI(win) {

    while (win) {

        if (win.API) {
            return win.API;
        }

        if (win.parent === win) {
            break;
        }

        win = win.parent;
    }

    return null;
}

scormAPI = findAPI(window);

console.log("SCORM API:", scormAPI);