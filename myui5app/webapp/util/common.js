sap.ui.define([], function(){
    return {

		toUpperCase: function(inp) {
			if(inp)
				return inp.toUpperCase();
		},

        concatValues: function(sal, curr) {
            if(sal && curr)
                return sal + " " + curr;
        }

    };
});