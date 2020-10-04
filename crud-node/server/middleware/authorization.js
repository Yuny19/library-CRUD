function authorization(req, res, next) {
    if (req.user.role == 'employee') {
        next();
    } else {
        res.status(401).json({
            message: 'User Not Authorized'
        });
    }
}

module.exports=authorization;