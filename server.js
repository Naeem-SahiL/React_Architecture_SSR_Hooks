import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import { StaticRouter } from 'react-router-dom/server'
import App from './src/App';
import { ServerStyleSheet } from 'styled-components'
import { InitialDataContext } from './src/pages/InitialDataContext';

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

app.get('/*', async (req, res) => {
    const sheet = new ServerStyleSheet()
    const contextObj = { _isServerSide: true, _requests: [], _data: {} }

    renderToString(
        sheet.collectStyles
            (
                <InitialDataContext.Provider value={contextObj}>
                    <StaticRouter location={req.url}>
                        <App />
                    </StaticRouter>
                </InitialDataContext.Provider>
            )
    );

    await Promise.all(contextObj._requests);
    contextObj._isServerSide = false;
    delete (contextObj._requests);

    const reactApp = renderToString(
        <InitialDataContext.Provider value={contextObj}>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </InitialDataContext.Provider>
    );



    const file = path.resolve('./build/index.html');
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send(err)
        }
        // const preloadedArticles = articles;
        return res.send(
            data.replace('<div id="root"></div>', `<script>window.preLoadedData = ${JSON.stringify(contextObj)}</script><div id="root">${reactApp}</div>`)
                .replace('{{ styles }}', sheet.getStyleTags())
        )
    })
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})
