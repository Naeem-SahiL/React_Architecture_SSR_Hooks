import React, { useState, useEffect } from 'react';
import { useDataSSR } from '../useDataSSR';

const defined = typeof window !== "undefined"

// if (!defined)
//   global.window = {}

function Articles() {
  // const [articles, setArticles] = useState(window && window.preLoadedArticles);
  // const [show, setShow] = useState(false);

  const articles = useDataSSR('articles', () => {
    console.log('loading articles from server')
    return fetch('http://localhost:8080/api/articles')
      .then(res => res.json())
  })

  // useEffect(() => {


  //   setShow(true);

  // }, [])

  if (false) {
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