import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import { StaticRouter } from 'react-router-dom/server'
import App from './src/App';
import { ServerStyleSheet } from 'styled-components'

const app = express();
app.use(express.static('./build', { index: false }));

const articles = [
    { title: 'Article 1', author: 'author 1' },
    { title: 'Article 2', author: 'author 2' },
    { title: 'Article 3', author: 'author 3' },
    { title: 'Article 4', author: 'author 4' },
    { title: 'Article 5', author: 'author 5' },
]

app.get('/api/articles', (req, res) => {
    const loadedArticles = articles;
    res.json(loadedArticles)
});

app.get('/*', (req, res) => {
    const sheet = new ServerStyleSheet()

    const reactApp = renderToString(
        sheet.collectStyles
            (<StaticRouter location={req.url}>
                <App />
            </StaticRouter>
            )
    );

    const file = path.resolve('./build/index.html');
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send(err)
        }
        const preloadedArticles = articles;
        return res.send(
            data.replace('<div id="root"></div>', `<script>window.preLoadedArticles = ${JSON.stringify(preloadedArticles)}</script><div id="root">${reactApp}</div>`)
                .replace('{{ styles }}', sheet.getStyleTags())
        )
    })
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})