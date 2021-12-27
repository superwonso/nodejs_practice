const express = require('express');
const app = express();
const router = express.Router();

app.listen(8080,function(){
    console.log('Server is running on port ' + 8080);
}
);

/*app.get('/about',function(req,res){
    res.send('About Page');
    res.send('<h1>About Page</h1>');
    res.send('superwonso');
}
); */

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
}
);
app.get('/introduce',function(req,res){
    res.sendFile(__dirname+'/introduce.html');
}
);

app.listen(3000)