import { ThemeProvider } from "styled-components"
import { Dashboard } from "./components/Dashboard"
import { TaskProvider } from "./context/TaskContext"
import GlobalStyle from "./styles/global"
import theme from "./styles/theme"

function App() {

  return (
    <TaskProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Dashboard/>
      </ThemeProvider>
    </TaskProvider>
  )
}

export default App
