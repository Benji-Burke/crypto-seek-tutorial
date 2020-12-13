import {useState, useEffect} from 'react';

const baseUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&?apikey=6ccfcc7c18aa8c9a843472090f99f174349d955a89cbfc6a69b0f78f3ace71c5`;

export default function useFetch(url){
    const [data, setData]=useState(null);
    const [error, setError]=useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function init(){
          try{
          const response =await fetch(baseUrl);
          if (response.ok){
              const json = await response.json();
              setData(json);
            
          } else {
              throw response;
          }
          } catch (e){
            setError(e);
          } finally {
            setLoading(false);
          }
        }
        init();
      }, [url]);

      return {data, error, loading};
}