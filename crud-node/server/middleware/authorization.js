const jwt = require('jsonwebtoken');

function authorization(req, res, next) {
    try {
        const token = req.headers['authorization'];
        var decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        if (req.user.role == 'employee') {
            next();
        }
    } catch (err) {
        res.status(401).json({
            message: 'User Not Authorized'
        });
    }
}

module.exports = authorization;