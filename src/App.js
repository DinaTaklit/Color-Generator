import { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [numColors, setNumColors] = useState(10)
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(numColors))
  const handleSubmit = e => {
    e.preventDefault()
    setError(false)
    try{
      let colors = new Values(color).all(parseInt(numColors))
      setList(colors)
    }catch(error){
      setError(true)
    }
  }
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={color}
            onChange={e => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error': null}`}
          />
         <input 
            type="number"
            value={numColors}
            onChange={e => setNumColors(e.target.value)}
            style={{border:"2px solid gray"}}
          />

          <button type="submit" className="btn">Generate</button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color, index) => {
            return (
              <SingleColor 
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
                base={list.length / 2}
              />
            )
          })
        }
      </section>
    </>
  );
}

export default App;
