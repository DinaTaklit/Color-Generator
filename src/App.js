import { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))
  const handleSubmit = e => {
    e.preventDefault()
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
              />
            )
          })
        }
      </section>
    </>
  );
}

export default App;
