const { movieType } = require('./types.js')
const { inputMovieType } = require('./inputtypes.js')
let { movies } = require('./data.js')

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMovie: {
      type: movieType,
      args: {
        input: { type: inputMovieType }
      },
      resolve(source, args) {

        const movie = {
          id: args.input.id,
          name: args.input.name,
          year: args.input.year,
          directorId: args.input.directorId
        }

        movies.push(movie)

        return _.find(movies, { id: args.input.id })
      }
    },
    addDirector: {
      type: directorType,
      args: {
        input: { type: inputDirectorType }
      },
      resolve(source, args) {
        const director = {
          id: args.input.id,
          name: args.input.name,
          age: args.input.age
        }

        directors.push(director)

        return _.find(directors, { id: args.input.id })
      }
    }
  }
})

exports.mutationType = mutationType