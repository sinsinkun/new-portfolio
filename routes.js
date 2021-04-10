function apiRoutes(app) {
  app.get("/echo", (req,res) => {
    res.send("Echo");
  })
}

module.exports = apiRoutes;