// Return that as the export for use in Webpack, Browserify etc.
module.exports = self.fetch.bind(self);
