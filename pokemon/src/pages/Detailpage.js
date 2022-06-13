import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DetailpageList from '../components/DetailpageList';

const Detailpage = () => {
  const [pocket, setPocket] = useState();
  const SinglePocketmon = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
  const { id } = useParams();
  

  const fetchPocket = async () => {
    const { data } = await axios.get(SinglePocketmon(id));
    setPocket(data);
    console.log(data);
  };
 
  useEffect(() => {
    fetchPocket();
  }, []);

  return (
    <div>
      <DetailpageList pocket={pocket} />
    </div>
  )
}

export default Detailpage