import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        textAlign: "center",
      }}>
        <Header title="My react app" />
        <h1>Hello</h1>
        <Footer />

      </div>
    </>
  )
}

export default App
