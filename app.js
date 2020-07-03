const express = require('express');

const app = express();
app.use(express.static('public'));
app.listen(80);

const NodeMediaServer = require('node-media-server');
 
 const config = {
   rtmp: {
       port: 1935,
       chunk_size: 60000,
       gop_cache: true,
       ping: 30,
       ping_timeout: 60
   },
   http: {
       port: 8000,
       allow_origin: '*'
   }
};
   
var nms = new NodeMediaServer(config)
nms.run();


