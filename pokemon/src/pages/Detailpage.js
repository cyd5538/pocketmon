import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DetailpageList from '../components/Detail/DetailpageList';
import SideBar from '../components/SideBar';



const Detailpage = ({ theme, setTheme }) => {
  const [pocket, setPocket] = useState();
  const SinglePocketmon = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
  const { id } = useParams();
  

  const fetchPocket = async () => {
    const { data } = await axios.get(SinglePocketmon(id));
    setPocket(data);

  };
 
  useEffect(() => {
    fetchPocket();
  }, []);

  return (
    <>
      <SideBar setTheme={setTheme} theme={theme} />
      <DetailpageList pocket={pocket} theme={theme} setTheme={setTheme} />
    </>
  )
}

export default Detailpage