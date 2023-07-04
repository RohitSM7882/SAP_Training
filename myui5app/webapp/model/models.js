sap.ui.define(
	["sap/ui/model/json/JSONModel"],
	function() {
		return {
			createJsonModel: function(_path) {
				var oJsonModel = new sap.ui.model.json.JSONModel();
				oJsonModel.loadData(_path);
				return oJsonModel;
			}
		};
	}
);