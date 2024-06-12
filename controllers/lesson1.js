const helloRoute = (req, res) => {
    res.send('Hello');
}

const helloAaronRoute = (req, res) => {
    res.send('Hello Aaron')
}

const helloTinaRoute = (req, res) => {
    res.send('Hello Tina')
}

const helloBraedanRoute = (req, res) => {
    res.send('Hello Braedan')
}

const helloNoahRoute = (req, res) => {
    res.send('Hello Noah')
}

module.exports = {
    helloRoute,
    helloAaronRoute,
    helloTinaRoute,
    helloBraedanRoute,
    helloNoahRoute,
}