import AuthProvider from "./contexts/authContext"
import Dashboard from "./pages/Dashboard"
import Landing from "./pages/Landing"
import Nav from "./pages/Nav"

const App = () => {
  return (
    <div>
      <AuthProvider >

      <Nav />
      <Landing/>
      <Dashboard />
      </AuthProvider>
    </div>
  )
}

export default App