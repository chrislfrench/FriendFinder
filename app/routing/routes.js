var path = require("path");

var friendsList = [];
// var reservations = [];

module.exports = function setupRoutes(app, express) {
  console.log(__dirname);
  app.use(express.static('../public'));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/home.html"));
  })

  app.get("/api/friends", function(req, res) {
    return res.json(friendsList);
  });

  app.post("/api/new", (req,res) => {
    var newFriends = req.body;
    friendsList.push(newFriends);
    return res.json(friendsList);
  });
};
