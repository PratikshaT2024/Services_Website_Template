import React from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Services from './assets/Pages/Services'

function App() {
  return (
    <div>

        
<BrowserRouter>

<Routes>
      <Route path="/" element={<Services/>} />
    

      {/* Add other routes as needed */}
    </Routes>
</BrowserRouter>
    
    </div>
  )
}

export default App