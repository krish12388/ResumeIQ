const { register, login, logout, loginWithGoogle, getMe } = require('../controllers/Auth.controller')
const { userIsAuthenticated } = require('../middlewares/Auth.middleware')
const { Router } = require('express')
const router = Router()

/**
 * @description: registers a new user
 * @route: POST /user/register
 * @access: public
 */
router.post("/register", register)

/**
 * @description: logs in a user
 * @route: POST /user/login
 * @access: public
 */
router.post("/login",login)

/**
 * @description: logs out a user
 * @route: POST /user/logout
 * @access: authenticated user
 */
router.post("/logout",logout)

/**
 * @description: logs in a user with google
 * @route: POST /user/login-with-google
 * @access: public
 */
router.post("/login-with-google",loginWithGoogle)

/**
 * @description: gets the logged in user
 * @route: GET /user/get-me
 * @access: authenticated user
 */
router.get("/get-me",userIsAuthenticated,getMe)

module.exports = router 