const jwt = require('jsonwebtoken');

function authentication(req, res, next) {
    try {
        const token = req.headers['authorization'];
        var decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({
            message: 'Token is Invalid'
        });
    }
}

module.exports=authentication;