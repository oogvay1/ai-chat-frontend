import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout"
import Chat from "./pages/Chat/chat"
import Login from "./pages/Login/Login"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Chat />} />
            <Route path="/registration" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
