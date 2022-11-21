//Project heavily inspired by https://github.com/DevModeVM/yt-stock-portfolio
const yahooFinance = require('yahoo-finance');
const express = require('express')
const app = express();

app.use(express.static('client'));

app.get('/history', (req, res) => {
    const symbol = req.query.symbol;
    const startDate = 2021-01-01
    const endDate = 2022-01-01,
    if (!symbol) {
        return res.status(404).send('Not found');
    }
    yahooFinance.historical({
        symbol: symbol,
        from: startDate,
        to: endDate,
        period: 'd'
    }, function (err, quotes) {
        if (quotes) {
            res.json(quotes);
        } else {
            return res.status(404).send('Not found');
        }
    });
})

const port = 8080
app.listen(port,() => {
    console.log(`Listening on port ${port}`)
})