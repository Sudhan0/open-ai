const success = (data) => {
    let output = {
        "code": 200,
        "data": data,
        "error": null
    }
    return output;
}

const failure = (error) => {
    let output = {
        "code": 500,
        "data": null,
        "error": error
    }
    return output;
}

module.exports={
    success,
    failure
}