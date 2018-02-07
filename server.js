const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if(/^\/static\/|^\/_next\//.test(pathname)) {
        return handle(req, res, parsedUrl)
    }

    const paths = pathname.split('/').slice(1)
    const hasLocale = ['en', 'it'].includes(paths[0])
    if(!hasLocale) {
        // 302 temporary solution to stop caching in the browser while project is in development
        // TODO: change to 301
        res.writeHead(302, {Location: `/en${req.url}`})
        return res.end()
    }

    const locale = paths[0]
    const path = paths.slice(1).join('/')
    req.locale = locale

    const roomMatches = path.match(/rooms(\/(\d)?)?$/) // This assumes that there won't be a room greater than 9

    if(roomMatches) {
        const roomNumber = roomMatches[2]
        if(!roomNumber) {
            // 302 temporary solution to stop caching in the browser while project is in development
            // TODO: change to 301
            res.writeHead(302, {Location: `/${locale}/rooms/1`}) // This feels a bit hardcoded, but will do for now
            return res.end()
        }
        req.room = roomNumber
        app.render(req, res, '/rooms', query)
    }
    else {
        app.render(req, res, `/${path}`, query)
    }
  })
  .listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
