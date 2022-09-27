const path = require("path");

module.exports = function({webserver}) {

    webserver.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/pages/index.html"))
    });
    
    console.log("[IndexPage] Version 0.1 loaded")
}