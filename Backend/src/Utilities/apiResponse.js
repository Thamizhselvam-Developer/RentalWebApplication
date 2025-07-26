const succesResponse = (message,data={}) => {
    return {
        status:"Success",
        message,
        data
    }
}

const errorResponse = (message,error=null) => {
    return{
        status:"Error",
        message,
        error
    }
}

module.exports={succesResponse,errorResponse}