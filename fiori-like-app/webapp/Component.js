/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "fiorilikeapp/model/models",
        "sap/m/routing/Target"
    ],
    function (UIComponent, models, Targets) {
        return UIComponent.extend("fiorilikeapp.Component", {
            metadata: {
                manifest: "json"
            },

            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                var _routerObj = this.getRouter();
                _routerObj.initialize();
            },
            
        //     createContent: function() {
        //         var oView = new sap.ui.view({
        //             viewName: "fiorilikeapp.view.App",
        //             type: "XML",
        //             id: "idAppView"
        //         });

        //         //this is set at global level, all the views 
        //         var oModelObj = models.createFruitModel();
        //         oView.setModel(oModelObj);

        //         var _view1 = new sap.ui.view({
        //             viewName: "fiorilikeapp.view.View1",
        //             type: "XML",
        //             id: "idView1"
        //         });

        //         var _view2 = new sap.ui.view({
        //             viewName: "fiorilikeapp.view.Details",
        //             type: "XML",
        //             id: "idView2"
        //         });

        //         var _appContainer = oView.byId("idAppContainer");
        //         _appContainer.addMasterPage(_view1).addDetailPage(_view2);

        //         return oView;
        //     }
        });
    }
);