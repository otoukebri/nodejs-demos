var http=require('http');
http.createServer(function(request,response){
	response.writeHead(200);
	response.write("Server is running \n");
	setTimeout(function(){
	response.write("Server is shutdown");		
	response.end();	
	},5000);
	
}).listen(8082);