sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("fiorilikeapp.controller.App", {

        // onInit() {
        // },

        onClick: function() {
          alert("Button Clicked!!");
        }
        
      });
    }
  );
  