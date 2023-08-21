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
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.attachRoutePatternMatched(this.changeSelection, this);
            },

            changeSelection: function(_event) {
                var _fruitId = parseInt(_event.getParameter("arguments").fruitId);
                var _itemList = this.getView().byId("idList");
                var _itemToBeSelected = _itemList.getItems()[_fruitId];
                _itemList.setSelectedItem(_itemToBeSelected);
            },

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
                // debugger;
                var _path = _event.getParameter("listItem").getBindingContextPath();
                // var _detailsView = this.getView().getParent().getParent().getDetailPages()[0];
                // _detailsView.bindElement(_path);
                // this.onNext();

                // debugger;
                var _sPath = _path.split("/")[_path.split("/").length - 1]
                this.oRouter.navTo("routeDetails", {
                    fruitId: _sPath
                });
            },

            onMultipleDelete: function(_event) {
                var _viewObj = this.getView().byId("idList");
                var _selectedItems = _viewObj.getSelectedItems();
                for(var i = _selectedItems.length; i >= 0; i--) 
                    _viewObj.removeItem(_selectedItems[i]);
            }
        });
    });
