const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb://localhost/mtf-backend'
    }
}


exports.get = function get(env){
    return config[env] || config.production
}