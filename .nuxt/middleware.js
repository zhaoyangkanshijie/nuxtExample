const middleware = {}

middleware['stats'] = require('..\\middleware\\stats.js')
middleware['stats'] = middleware['stats'].default || middleware['stats']

export default middleware
