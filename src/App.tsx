import React, {useState} from 'react';
import './App.scss';

function App() {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="App p0">
      <div className="Menu">
        <button>App 1</button>
        <button>App 2</button>
        <button>App 3</button>
        <button>App 4</button>
      </div>
      <div className="Main p0">
        <div className="Context">
          <div className="Left"></div>
          <div className="Center">App1</div>
          <div className="Right">
            <button>🔴</button>
            <button>🟡</button>
            <button>🟢</button>
          </div>
        </div>
        <div className="Description">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          </h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          expedita error nam excepturi nemo adipisci quo autem vero magni
          necessitatibus enim, doloremque sed fugit impedit dicta aliquid! Illo,
          qui cumque.
        </div>
        <div className="ButtonGroup">
          <button>Open file...</button>
          <button>Save as</button>
        </div>
        <div className="Controller">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="List">
          {Array(300)
            .fill(0)
            .map((_, i) => i.toString() + ' - Lorem')
            .filter((x) => {
              try {
                const regex = new RegExp(searchText);
                return regex.test(x);
              } catch (error) {
                return true;
              }
            })
            .map((x, i) => {
              return (
                <div key={x + i.toString()} className="Item">
                  <div className="Label">{x}</div>
                  {i % 2 ? (
                    <input type="text" />
                  ) : (
                    <select>
                      <option value="a">A</option>
                      <option value="b">B</option>
                      <option value="c">C</option>
                    </select>
                  )}
                  <div className="Brief">
                    {i}: Lorem ipsum dolor adipisci quo autem vero magni
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default App;
