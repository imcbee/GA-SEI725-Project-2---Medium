require('../config/db.connection')

module.exports = {
    articles: require('./articles_controller'),
    reviews: require('./reviews_controller')
}