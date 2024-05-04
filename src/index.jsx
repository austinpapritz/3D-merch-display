import './style.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import Underlay from './Underlayer.jsx'
import { Suspense } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Underlay />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>

    </>
)