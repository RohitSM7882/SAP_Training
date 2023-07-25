sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("fiorilikeapp.controller.View2", {
            // onInit: function () {

            // },

            onPrevious: function() {
                this.getView().getParent().to("idView1");
            }
        });
    });