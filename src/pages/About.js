import React, { lazy, Suspense } from 'react'
// import One from './One'
// import Three from './Three'
// import Two from './Two'

const One = lazy(() => import('./One'))
const Two = lazy(() => import('./Two'))
const Three = lazy(() => import('./Three'))


function About() {
  return (
    <>
      <div>About</div>
      <Suspense fallback={<p>Loading...</p>}>
        <One />
        <Two />
        <Three />
      </Suspense>

    </>
  )
}

export default About