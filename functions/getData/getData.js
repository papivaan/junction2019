const data_2019 = require('./data/data_2019.json');

exports.handler = function (event, constext, callback) {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(data_2019)
    })
}