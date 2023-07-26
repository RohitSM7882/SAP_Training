sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("fiorilikeapp.controller.View1", {
            // onInit: function () {

            // },

            onNext: function() {
                var _appContainer = this.getView().getParent();
                _appContainer.to("idView2");
            },

            onSearchClick: function (_event) {
                var _searchStr = _event.getParameter("query");
                //Filter(val1, operand, val2) => apply filter [1st step to search]
                var _filterObj1 = new Filter("name", FilterOperator.Contains, _searchStr);
                var _filterObj2 = new Filter("type", FilterOperator.Contains, _searchStr);

                var _filterMain = new Filter({
                    filters: [_filterObj1, _filterObj2],
                    and: false
                });
                var _filterLst = [_filterMain];

                //<--Alternate Methid-->
                // var _filterMain = new Filter({
                //     filters: [
                //         new Filter("name", FilterOperator.Contains, _searchStr),
                //         new Filter("type", FilterOperator.Contains, _searchStr)
                //     ],
                //     and: false
                // });
                // var _filterLst = [_filterMain];

                //Inject the filter inside the item agregation of list control [2nd step to search]
                var _listObj = this.getView().byId("idList");
                _listObj.getBinding("items").filter(_filterLst);


                // var _pageObjList = this.getView().getParent().getPages();
                // _pageObjList[1].getContent()[0].setTitle(_searchStr);
                // this.onNext();
            },

            onDelete: function(_event) {
                var _listItemObj = _event.getParameter("listItem");
                var _listObj = _event.getSource();
                _listObj.removeItem(_listItemObj);
            },

            onItemClick: function(_event) {
                this.onNext();
            }
        });
    });
