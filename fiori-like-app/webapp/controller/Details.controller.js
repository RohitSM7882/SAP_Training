sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        return Controller.extend("fiorilikeapp.controller.Details", {
            onPrevious: function(_event) {
                this.getView().getParent().to("idView1");
            }
        });
    });
