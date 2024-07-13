import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './Components/AppNavbar';
import Sidebar from './Components/Sidebar';
import { Col, Container, Row, Form, Alert } from 'react-bootstrap';
import { useState, useEffect   } from 'react';
import BarChart from './Components/BarChart';
import LineChart from './Components/LineChart';
import PieChart from './Components/PieChart';
import axios from 'axios';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  const dataOptions =[
    'bitcoin', 'ethereum', 'ripple', 'litecoin', 'cardano', 
    'polkadot', 'binancecoin', 'tether', 'stellar', 'chainlink', 
    'dogecoin', 'solana', 'uniswap', 'aave', 'avalanche-2'
  ];
  const [selectedData, setSelectedData] = useState('bitcoin');
  const [days, setDays] = useState(5);
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "Price",
        data: [],
        backgroundColor: [],
        borderColor: "dark",
        borderWidth: 1,
      },
    ],
  });
  const [error, setError] = useState(null);
  const [cachedData, setCachedData] = useState({});

  const fetchData = (crypto, days) => {
    if (cachedData[crypto] && cachedData[crypto][days]) {
      setUserData(cachedData[crypto][days]);
    } else {
      axios.get(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        .then(response => {
          const prices = response.data.prices.slice(0, days); // Sadece belirli gün sayısını al
          const newUserData = {
            labels: prices.map(price => new Date(price[0]).toLocaleDateString()),
            datasets: [
              {
                label: `${crypto.toUpperCase()} Price`,
                data: prices.map(price => price[1]),
                backgroundColor: prices.map(() => getRandomColor()),
                borderColor: "dark",
                borderWidth: 1,
              },
            ],
          };
          setUserData(newUserData);
          setCachedData(prevState => ({
            ...prevState,
            [crypto]: {
              ...prevState[crypto],
              [days]: newUserData
            }
          }));
          setError(null);
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
          setError("API limit reached or there was an error fetching the data.");
        });
    }
  };

  useEffect(() => {
    fetchData(selectedData, days);
  }, [selectedData, days]);

  const handleDropdownChange = (e) => {
    setSelectedData(e.target.value);
  };

  const handleDaysChange = (e) => {
    setDays(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <AppNavbar />
      </header>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col xs={10}>
          <Row>
            <Col xs={4} >
            <Form.Group controlId="dataSelect">
              <Form.Label>Select Data</Form.Label>
              <Form.Control as="select" onChange={handleDropdownChange}>
                {dataOptions.map((crypto) => (
                  <option key={crypto} value={crypto}>{crypto.toUpperCase()}</option>
                ))}
              </Form.Control>
            </Form.Group>
            </Col>
            <Col xs={4}>
            <Form.Group controlId="daysSelect">
              <Form.Label>Select Days</Form.Label>
              <Form.Control type="number" value={days} onChange={handleDaysChange} />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            </Col>
            </Row>
            <Row>
              <Col xs={9} md={5} className='my-2' >
                <BarChart chartData={userData} />
              </Col>
              <Col xs={9} md={5} className='my-2'>
                <LineChart chartData={userData} />
              </Col>
              <Col xs={9} md={5} className='my-2'>
                <PieChart chartData={userData} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default App;
