import { ThemeProvider } from "styled-components"
import { Dashboard } from "./components/Dashboard"
import GlobalStyle from "./styles/global"
import theme from "./styles/theme"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Dashboard/>
    </ThemeProvider>
  )
}

export default App
