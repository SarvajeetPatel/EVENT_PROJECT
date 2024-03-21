function adminLogin(req, res, next) {
    const { userType } = req.body;

    if(userType === 'admin'){
        next()
    } else {
        res.send('No Auth. Only ADMIN!');
    }
}

module.exports = adminLogin;