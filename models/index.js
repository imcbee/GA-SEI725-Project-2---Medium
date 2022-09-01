require("../config/db.connection");

module.exports = {
    Articles: require('./Article'),
    Reviews: require('./Review'),
    User: require('./User')
}