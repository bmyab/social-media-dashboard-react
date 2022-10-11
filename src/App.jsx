import Header from './Components/Header'
import ListCards from './Components/ListCards'
import ListOverviews from './Components/ListOverviews'
function App() {
  return (
    <div className='container'>
      <Header />
      <main className='mb'>
        <ListCards />
        <ListOverviews/>
      </main>
    </div>
  )
}

export default App
