var db = require('../models')
var tokenTable = db.token

async function AuthJwt(req, res, next) {
    const { authorization } = req.headers;
    const { userId } = req.body;

    const data = await tokenTable.findOne({
        where: {
            token: authorization.slice(7),
            user_id: userId
        }
    })

    if (!data) {
        res.send('Authentication Failed!')
    } else {
        next();
    }
}

module.exports = AuthJwt;