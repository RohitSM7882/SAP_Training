sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
    function (Controller, MessageBox, MessageToast) {
        return Controller.extend("fiorilikeapp.controller.Details", {

            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.attachRoutePatternMatched(this.onRoutePatternMatched, this);
            },

            onRoutePatternMatched: function(_event) {
                // debugger;
                //Get the current view object
                var _currView = this.getView();
                //Prepare the path for binding elementof exact fruit which is selected
                var _index = _event.getParameter("arguments").fruitId;
                var _path = "/fruits/" + _index;
                //Bind the element to the current view
                _currView.bindElement(_path);
            },

            onPrevious: function(_event) {
                this.getView().getParent().getParent().to("idView1");
            },

            onSave: function(_event) {
                MessageBox.confirm("Do you want to order the selected item?", {
                    "Title": "Order Confirmation",
                    onClose: function (_selection) {
                        if(_selection === 'OK') {
                            MessageToast.show("Order is placed", {
                                duration: 2000
                            });
                        }else {
                            MessageBox.error("Try something new!!");
                        }
                    }
                })
            },

            onValueHelp: function(_event) {
                MessageBox.confirm("This page is under development!!!");
            }
        });
    });
