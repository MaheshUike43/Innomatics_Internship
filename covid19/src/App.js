import { useEffect, useState } from 'react';
import './App.css';
import CovidData from './components/CovidData';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  const [allData, setAllData] = useState({});
  const [st, setST] = useState([]);

  const getCovidData = () => {
    fetch("https://api.rootnet.in/covid19-in/stats/latest").then(result => {
      return result.json();
    }).then(data => {
      setAllData(data.data.summary)
      setST(data.data.regional)
    })
  }

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Dashboard totalData={allData} />
      <div className='allCards'>
        {
          st.map((data, index) => {
            return (
              <CovidData key={index}
                location={data.loc}
                caseIndia={data.confirmedCasesIndian}
                caseFor={data.confirmedCasesForeign}
                dischrg={data.discharged}
                death={data.deaths}
                total={data.totalConfirmed}
              />
            )
          })
        }
      </div>
      <Footer/>
    </div>
  );
}

export default App;
