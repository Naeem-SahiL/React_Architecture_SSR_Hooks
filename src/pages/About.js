import React, { lazy, Suspense } from 'react'
import ErrorBoundary from '../ErrorBoundary'
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
        <ErrorBoundary>
          <One />
        </ErrorBoundary>
        <ErrorBoundary><Two /></ErrorBoundary>
        <ErrorBoundary><Three /></ErrorBoundary>

      </Suspense>
    </>
  )
}

export default About