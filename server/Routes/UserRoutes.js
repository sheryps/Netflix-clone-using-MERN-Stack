
const {
    addToLikedMovies,getLikedMovies,removeFromLikedMovies
  } = require("../Controllers/UserController");

const router = require("express").Router();
router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikedMovies);
router.put("/remove", removeFromLikedMovies);
module.exports = router;