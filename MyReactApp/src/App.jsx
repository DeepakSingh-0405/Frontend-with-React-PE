import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [category,setCategory] = useState("business")
  const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  const handleSearch = () => {
    setSearchAttempted(true);
    const articleId = parseInt(search);
    if (isNaN(articleId) || articleId < 0 || articleId >= articles.length) {
      setSearchResult(null);
      return;
    }
    setSearchResult(articles[articleId]);
    setSearch('');
  }



  useEffect(() => {
    async function getdata() {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7e3aa61c803c4fbaa8b5a976ad3e0257`);
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
  }, [category])

  return (

    <div className="flex flex-col min-h-screen">
      <div className="shadow z-50 top-0">
        <Header />
      </div>

      <div className='m-3'>
        <input type="search" placeholder="Search articles..."
          className='p-3 rounded-md m-2'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className='p-2 border rounded-md'
          onClick={handleSearch}>Search
        </button> <br />
        <select
          className='p-3 rounded-md m-2'
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {searchAttempted && (
        <div className="m-2 p-4 border flex items-center justify-center">
          {searchResult ? (
            <Card url={searchResult.urlToImage} title={searchResult.title} description={searchResult.description} author={searchResult.author} />
          ) : (
            <h1>No article found for the given ID.</h1>
          )}
        </div>
      )}

      <main className='grid grid-cols-3'>
        {loading ? <h1>loading...</h1> :
          articles.length > 0 &&
          articles.map((article, index) => (
            <Card key={index} url={article.urlToImage} title={article.title} description={article.description} author={article.author} />
          ))
        }
      </main>

      <div className="shadow">
        <Footer />
      </div>

    </div>
  )
}

export default App
