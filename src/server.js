const express = require('express')

const app = new express()

const port = 5000

const { GraphQLSchema } = require('graphql')

const { query } = require('./query.js')
const { mutation } = require('./mutation.js')

const schema = new GraphQLSchema({ query, mutation })

const graphqlHTTP = require('express-graphql')

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true // web ui
	})
)

app.listen(port, () => {
	console.log(`GraphlQL Server Running at localhost:${port}`)
})
