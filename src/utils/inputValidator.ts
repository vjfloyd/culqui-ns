const validateAuth = (requestBody: any) => {
    console.log("requestBody.cvv=>", requestBody.cvv)
    console.log("requestBody.cvv=>", requestBody.year)
    let emailPattern = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;
    if (requestBody.cvv.length < 3 && requestBody.cvv.length > 4)
        console.log('x')
        return true;
    if (requestBody.year.length != 4)
        console.log('x')
        return true;
    if (requestBody.month.length < 1 || requestBody.month.length > 2)
        console.log('x')
        return true
    if (!emailPattern.test(requestBody.email)) {
        console.log('x')
        return true;
    }
    return false;
}

module.exports = {
    validateAuth,
}
