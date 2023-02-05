import 'destack/build/browser/index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ContentProviderReact } from 'destack'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentProviderReact />} />
        <Route path="/page2" element={<ContentProviderReact />} />
        <Route path="/page3" element={<>Page 3</>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
