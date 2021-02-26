import React, {useState,useEffect} from 'react'

import './App.css';
import Basic from './components/Basic';
import Converter from './components/Converter';

function App() {
  const [choosing, setChoosing] = useState(false)
  const [basic, setBasic] = useState(() =>{
    const localData1 = localStorage.getItem('basic');
    return localData1 ? JSON.parse(localData1) : true;
  });
  const [advanced, setAdvanced] = useState(() =>{
    const localData1 = localStorage.getItem('advanced');
    return localData1 ? JSON.parse(localData1) : false;
  });
  // const [advanced, setAdvanced] = useState(false);
  const [converter, setConverter] = useState(() =>{
    const localData2 = localStorage.getItem('converter');
    return localData2 ? JSON.parse(localData2) : false;
  });


  useEffect(() => {
    localStorage.setItem('basic', JSON.stringify(basic))
    localStorage.setItem('converter', JSON.stringify(converter))
  }, [basic, converter])  


  function basicMode(){
    setBasic(true)
    setAdvanced(false)
    setConverter(false)
    setChoosing(false)
  }
  function advancedMode() {
    setBasic(false)
    setAdvanced(true)
    setConverter(false)
    setChoosing(false)

  }
  function converterMode() {
    setBasic(false)
    setAdvanced(false) 
    setConverter(true)
    setChoosing(false)

  }
  

  return (
    <div className="App">
      <div className="modes" onMouseDown={() => setChoosing(true)}>
        <h6 className="mode mc">
          {basic ? "Basic Mode" : converter ? "Converter Mode" : "Advanced Mode"
          }
          </h6>
        {
          choosing ?
            <div className="choices">
              <h6 className="mode mc" onClick={basicMode}>Basic Mode
               <span className={basic ? "circle" : ""}>
               </span>
              </h6>
              <h6 className="mode mc" onClick={advancedMode}>Advanced Mode
              <span className={advanced ? "circle" : ""}>
                  
              </span>
              </h6>
              <h6 className="mode mc" onClick={converterMode}>Converter Mode
              <span className={converter ? "circle" : ""}>
              </span>
              </h6>

            </div> : ""
        }
        <div className="arrow mc"></div>
        </div>
      <Basic basic={basic}/>
      <Converter converter={converter}/>
    </div>
  );
}

export default App;
