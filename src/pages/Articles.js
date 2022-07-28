import React, { useState, useEffect } from 'react';

const defined = typeof window !== "undefined"

if (!defined)
  global.window = {}

function Articles() {
  const [articles, setArticles] = useState(window && window.preLoadedArticles);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window && !window.preLoadedArticles) {
      console.log('loading articles from server')
      fetch('/api/articles')
        .then(res => res.json())
        .then(data => setArticles(data))
    }

    setShow(true);

  }, [])

  if (!show) {
    return null;
  }

  else {
    return (
      <>
        <div>Articles</div>
        {articles &&
          articles.map((item) => (
            <div key={item.title}>
              <h1>{item.title}</h1>
              <p>{item.author}</p>
            </div>
          ))
        }
      </>
    )
  }

}
export default Articles