const { Router } = require("express");

const LogEntry = require("../models/LogEntry")

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "🌎",
  });
});

router.post('/', (req,res) => {
    console.log(req.body);
    const logEntry = new LogEntry(req.body);
})

module.exports = router;
