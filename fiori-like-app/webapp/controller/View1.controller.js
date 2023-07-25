sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
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
                var _pageObjList = this.getView().getParent().getPages();

                _pageObjList[1].getContent()[0].setTitle(_searchStr);
                this.onNext();
            }
        });
    });
