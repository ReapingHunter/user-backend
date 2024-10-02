const loggingMiddleware = (req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} request to ${req.url}`)
  next()
}

module.exports = { loggingMiddleware }