import React from 'react';

import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Routes/Routes';

function App() {
  return (
    <div className="App">
     
   <RouterProvider router={router} ></RouterProvider>
      
    </div>
  );
}

export default App;
