import logo from './logo.svg';
import './App.css';
import PokeCard from './components/PokeCard';
import CButton from './components/CButton/CButton';
import SelectLabels from './components/SelectLabels';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';


function App() {
  const ligas = [
    {
    name:"Great League",
    value:"1500",},
    {
    name:"Ultra League",
    value:"2500",},
    {
    name:"Master League",
    value:"10000",
    }
  ] 

  const numberOfPokes = [
    {
    name:"3",
    value:"3",},
    {
    name:"7",
    value:"7",},
    {
    name:"10",
    value:"10",
    }
  ] 

  const getSelectData = async (data)=> {
 console.log(data)
  }
  return (
    <div className="App">
      <Container maxWidth="sm">
      <SelectLabels
          title1="League" nameArray1={ligas} helperText1="Select the desired league." title2="Nº Of Pokes" nameArray2={numberOfPokes}  helperText2="Select the number of Top Pokemons." onSubmit={getSelectData} />
      </Container>
    </div>
  );
}

export default App;
