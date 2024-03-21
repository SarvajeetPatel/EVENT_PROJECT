function userLogin(req, res, next) {
    const { userType } = req.body;

    if(userType === 'user'){
        next()
    } else {
        res.send('No Auth. Only user!');
    }
}

module.exports = userLogin;