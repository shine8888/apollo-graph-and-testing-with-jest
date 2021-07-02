const {data} = require('../data')
const resolvers = {
    Query: {
        getAllUser() {
            return data
        }
    },
    Mutation :{
        createUser(parent, args){
            data.push(args)
            return args
        }
    }
}

module.exports = {resolvers}