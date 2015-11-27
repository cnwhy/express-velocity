var vm = require("velocity");
var path = require("path");

function expressify(options){
  options = options || [];
  return function render( filename, data , callback ) {
    try{
	    var engine = new vm.Engine({
	      template: filename,
	      root: options.root || data.settings.views || []
	    });
	    callback(null,engine.render( data ));
	}catch(e){
    	callback(e);
	}
  }
}


module.exports = expressify
