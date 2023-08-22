sap.ui.define(
    [],
    function() {
        sap.ui.core.Control.extend(
            "fiorilikeapp.control.Heading",
            {
                metadata: {
                    properties: {
                        "text": ""
                    }
                },

                init: function() {

                },

                renderer: function(oRm, oContorl) {
                    oRm.write("<h1>" + oContorl.getText() + "</h1>");
                }
            }
        );
    }
)