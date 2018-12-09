const browserify = require('browserify')
const b = browserify({
  insertGlobalVars: {
    riot: function() {
      return "require('riot')"
    }
  }
})
b.transform(require('riotify'), {global: true})
b.add('./index.js')
b.bundle().pipe(process.stdout)