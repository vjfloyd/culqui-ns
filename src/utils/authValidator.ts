const validateAuth = (requestBody: any) => {
    console.log("request=>", requestBody)
    let emailPattern = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;
    if (requestBody.cvv.length != 3 || requestBody.cvv.length != 4)
        return true;
    if (requestBody.year.length != 4)
        return true;
    if (requestBody.month.length != 1 || requestBody.month.length != 2)
        return true
    if (!emailPattern.test(requestBody.email)) {
        return true;
    }
    return false;
}

module.exports = {
    validateAuth,
}
