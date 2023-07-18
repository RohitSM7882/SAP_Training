sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"webApp/model/models",
	"webApp/util/common"
	], function(Controller, model, utilCommon) {
		"use strict";

	return Controller.extend("webApp.controller.View1", {
		oCore: sap.ui.getCore(),
		_utilCommon: utilCommon,

		onInit: function() {
			var oJsonModel = model.createJsonModel("model/data/empData.json");
			var oJsonModel_2 = model.createJsonModel("model/data/empData_2.json");

			this.oCore.setModel(oJsonModel_2, "named_model");
			this.oCore.setModel(oJsonModel);

			var oTable = this.getView().byId("_IDGenTable1");
			oTable.bindRows("/empTab");
        },

		onSubmit: function() {
			var oModel = this.oCore.getModel();
			if(oModel.getProperty("/enable") == true)
				oModel.setProperty("/enable", false);
			else
				oModel.setProperty("/enable", true);
		},

		onFlip: function() {
			var oModel = this.oCore.getModel();
			var oModelGame = this.oCore.getModel("named_model");

			this.oCore.setModel(oModel, "named_model");
			this.oCore.setModel(oModelGame);
		}
	});

});