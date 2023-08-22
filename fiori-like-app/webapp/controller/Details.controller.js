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

            onCityValueChange: function(_event) {
                this.feildObj.setValue(_event.getParameter("selectedItem").getLabel());
            },

            onValueHelp: function(_event) {
                this.feildObj = _event.getSource();
                if(!this.cityDataobj){
                    this.cityDataobj = new sap.ui.xmlfragment("fiorilikeapp.fragments.popup");
                    this.getView().addDependent(this.cityDataobj);
                    this.cityDataobj.setTitle("City Data");
                    this.cityDataobj.attachConfirm(this.onCityValueChange, this);
                    this.cityDataobj.setMultiSelect(false);
                }

                this.cityDataobj.bindAggregation(
                    "items",
                    {
                        path: "/cities",
                        template: new sap.m.DisplayListItem({
                            label: "{name}",
                            value: "{state}"
                        })
                    }
                );

                this.cityDataobj.setContentWidth("auto");
                this.cityDataobj.setContentHeight("auto");
                this.cityDataobj.rerender();
                this.cityDataobj.open();
            },

            //create global object to reduce multiple object creation(everytime new sap.ui.xmlfragmen() is called a new object will be created and it consumes sapce in memory)
            cityDataobj: null,
            supplierDataObj: null,
            onTableFilter: function(_event) {
                if(!this.supplierDataObj){
                    this.supplierDataObj = new sap.ui.xmlfragment("fiorilikeapp.fragments.popup");
                    
                    //this.supplierDataObj don't have access to the model as it is a fragment
                    //add dependency to the fragment so that it can access same as view level
                    this.getView().addDependent(this.supplierDataObj);
                    this.supplierDataObj.setTitle("Suppliers Data");
                }
                this.supplierDataObj.bindAggregation(
                    "items",
                    {
                        path: "/supplier",
                        template: new sap.m.DisplayListItem({
                            label: "{name}",
                            value: "{city}"
                        })
                    }
                );

                // Reset dialog's content size to auto
                this.supplierDataObj.setContentWidth("auto");
                this.supplierDataObj.setContentHeight("auto");
                // Trigger the recalculation of the content size
                this.supplierDataObj.rerender();

                this.supplierDataObj.open();
            }
        });
    });
