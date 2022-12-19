import logo from './logo.svg';
import './App.css';
import react, { useState } from 'react'

function App() {

const [nflState, setNflState] = useState({
  url:'https://today.citadel.edu/wp-content/uploads/2021/02/DiscoverySports_NFL-1024x614-1.jpg',
  caption:"Lets see who really wants to play some football"
})

const resetClick = () => {
  setNflState({
    url:'https://today.citadel.edu/wp-content/uploads/2021/02/DiscoverySports_NFL-1024x614-1.jpg',
    caption:'Lets see who really wants to play some football'
  })
}

const davAdamsClick = () => {
  setNflState({
    url:'https://static.foxnews.com/foxnews.com/content/uploads/2022/10/Davante-Adams.jpg',
    caption:'Davante goes deep!... Touchdown!'
  })
}

const deeboClick = () => {
  setNflState({
    url:'https://www.nbcsports.com/sites/rsnunited/files/article/hero/deebo-samuel-49ers-getty.jpg',
    caption:'Deebo Time! Spin round Spin round, walk!'
  })
}

const jamarClick = () => {
  setNflState({
    url:'https://sportshub.cbsistatic.com/i/r/2022/06/27/9883e4cf-6201-42c4-8684-8e05d3308ea9/thumbnail/1200x675/72f2c56e9e565234d87728b182108e3a/jamarr-chase.jpg',
    caption:'Who Dey! "Throw the damn ball, because Jamarr is down here somewhere"'
  })
}

const jeffersonClick = () => {
  setNflState({
    url:'https://s3media.247sports.com/Uploads/Assets/570/947/9947570.jpg',
    caption:'Jefferson is the king of the griddy, I said right foot creep'
  })
}

const diggsClick = () => {
  setNflState({
    url:'https://billswire.usatoday.com/wp-content/uploads/sites/65/2022/09/1425378425.jpg?w=1000&h=600&crop=1',
    caption:'It gets cold up in Buffalo New York'
  })
}

  return (
    <div className="App">
      <h1>NFL FAVORTIES!</h1>
      <div>
        <img src={nflState.url} id='yunky'/>
        <h2>{nflState.caption}</h2>
      </div>
      <div>
        <button onClick={() => {davAdamsClick()}}>Davante Adams button</button>
        <button onClick={() => {deeboClick()}}>Deebo button</button>
        <button onClick={() => {jamarClick()}}>Ja'marr Chase button</button>
        <button onClick={() => {jeffersonClick()}}>Justin Jefferson button</button>
        <button onClick={() => {diggsClick()}}>Stephon Diggs button</button>
      </div>
      <button onClick={() => {resetClick()}}>Reset</button>
    </div>
  );
}

export default App;
