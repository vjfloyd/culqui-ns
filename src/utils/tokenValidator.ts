
const tokenValidator = (headers, callback) => {
    let authorization = headers['Authorization'].split(' ');
    console.log('what:', authorization[0]);
    if( authorization[0] != 'Bearer') {
        console.log('intruso')
    } else {
        if (authorization[1] !== 'pk_test_abABcd'){
            callback(null, {
                statusCode: 401,
                body: JSON.stringify('Unauthorize user')
            });
        }
    }
}
module.exports = {
    tokenValidator
}
