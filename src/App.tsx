import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/HomePage"
import { ThemeProvider } from "./components/theme-provider"

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
