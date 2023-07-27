sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
    function (Controller, MessageBox, MessageToast) {
        return Controller.extend("fiorilikeapp.controller.Details", {
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
            }
        });
    });
