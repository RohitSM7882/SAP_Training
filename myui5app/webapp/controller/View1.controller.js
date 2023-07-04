sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"webApp/model/models"
	], function(Controller, model) {
		"use strict";

	return Controller.extend("webApp.controller.View1", {
		
		onInit: function() {
			var oJsonModel = model.createJsonModel("model/data/empData.json");
			sap.ui.getCore().setModel(oJsonModel);
        },

		onSubmit: function() {
			var _empId = this.getView().byId("empId").getValue();
			var _empName = this.getView().byId("empName").getValue();
			var _empSalary = this.getView().byId("empSalary").getValue();
			var _empCurrency = this.getView().byId("empCurrency").getValue();
			console.log(_empId + "-" + _empName + "-" + _empSalary + "-" + _empCurrency);
		}
	});

});