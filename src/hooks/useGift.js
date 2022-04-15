import { useEffect, useState } from "react";
import getApi from '../services/Api.js';

export default function useGift({keyword}){
const [isLoading, setIsLoading] = useState(false);
const [gifs, setGift] = useState([]);

useEffect(() => {
        setIsLoading(true);
        getApi({ keyword }).then((gifs) => {
          setGift(gifs);
          setIsLoading(false);
        });
      }, [keyword]);

    return {isLoading, gifs};
};