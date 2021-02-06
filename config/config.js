const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb+srv://admin:g6iF7OL4nyuXy5Ry@mtf-backend.8n8pt.mongodb.net/mtf-backend?retryWrites=true&w=majority'
    }
}


exports.get = function get(env){
    return config[env] || config.default
}