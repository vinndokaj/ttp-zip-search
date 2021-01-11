import './App.css';
import ReactDOM from 'react-dom';
import Result from "./components/Result"

function App() {
  return (
    <div>
      <div id='headDiv'>
        <h1 id='head'>Zip Code Search</h1>
      </div>
      <div id='formDiv'>
        <label>
          Zip Code:
          <input type="text" id="userzip"/>
        </label>
        <button onClick={printResults}>Search</button>
      </div>
      <div id='resultDiv'></div>
    </div>
  );
}

function printResults(){
  const zip = document.getElementById('userzip').value;
  fetch(`http://ctp-zip-api.herokuapp.com/zip/${zip}`)
  .then(response => {
    if (response.status !== 200) {
      throw new Error("Enter valid Zip");
    }
    return response.json();
  })
  .then(zips => {
    const resultDiv = document.getElementById('resultDiv');
    let results = [];
    for(let i = 0; i < zips.length; i++){
      results[i] = <Result 
        locationText={zips[i].LocationText}
        state={zips[i].State}
        estimatedPop={zips[i].EstimatedPopulation}
        lat={zips[i].Lat}
        long={zips[i].Long}
        totalWages={zips[i].TotalWages}
      />
    }
    ReactDOM.render(results, resultDiv);
  })
  .catch(error => {
    console.log("error", error)
  });
}

export default App;
