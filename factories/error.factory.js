module.exports={
    unauthorized:function(){
        return {
            code: 403,
            message: "Forbidden"
        };
    },
    notFound:function(){
        return {
            code: 404,
            message: "Not Found"
        };
    },
    invalidRequest:function(){
        return {
            code: 400,
            message: "Invalid Request"
        };
    },
    default:function(){
        return {
            code: 500,
            message: "Server error"
        };
    }
};
