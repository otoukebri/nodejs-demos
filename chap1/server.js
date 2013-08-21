var http=require('http');
http.createServer(function(request,response){
	response.writeHead(200);
	response.write("Hello this is oussema");
	response.end();
}).listen(8082);
console.log('listening on port 8082');