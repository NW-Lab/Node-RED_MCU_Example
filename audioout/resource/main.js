import "nodered";	// import for global side effects
import Modules from "modules";
import config from "mc/config";
import Timer from "timer";

if (!Modules.has("flows")) {

    if (config.noderedmcu?.editor) {
        trace.left('{"state": "mod_waiting"}', "NR_EDITOR");
    } else {
        trace("No flows installed.\n");
    }

} else {

	Timer.set(function() {		// run on an empty stack

        const flows = Modules.importNow("flows");
        RED.build(flows);

        if (globalThis.REDTheme) {

            // This guard isn't really necessary
            // as the runtime disables all unsupported nodes!
            if (!Modules.has("ui_nodes") || !Modules.has("ui_templates")) {
                trace("flow neeeds UI nodes; not build into host \n");
            } else {

                const buildModel = Modules.importNow("ui_nodes");
                const templates = Modules.importNow("ui_templates");
                const REDApplication = templates.REDApplication;
                if (REDApplication) {
                    try {
                        const model = buildModel();
                        new REDApplication(model, { commandListLength: 4096, displayListLength: 8192, touchCount: 1, pixels: 7680 });
                    }
                    catch {}
                }

            }
        }
    });
}

