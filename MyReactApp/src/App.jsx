import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  const [index, setIndex] = useState(0)
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setIndex(prev => prev + 1);
  }

  useEffect(() => {
    async function getdata() {
      try {
        const res = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2026-02-20&sortBy=publishedAt&apiKey=7e3aa61c803c4fbaa8b5a976ad3e0257");
        const data = await res.json();
        setArticles(data.articles);
        setLoading(false);
        console.log(data.articles);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    }
    getdata();
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="shadow sticky z-50 top-0">
        <Header />
      </div>
      <main className="flex-1 text-centre">
        {loading ? <h1>loading...</h1> :
          articles.length > 0 && <Card url={articles[index].urlToImage} title={articles[index].title} description={articles[index].description} handleClick={handleClick} />}
      </main>
      <div className="shadow">
        <Footer />
      </div>
    </div>
  )
}

export default App
