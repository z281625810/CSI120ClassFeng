var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.json({
"name" : "Feng Sun",
"vacation" : {
	"places": ["44.73,-72.72","44.248, -74.641","43.734, -75.333"]
	}

});

});

var port = process.env.PORT || 5000;
app.listen(port);