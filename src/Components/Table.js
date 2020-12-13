import { useParams } from "react-router-dom";
import useFetch from "../Services/useFetch";
import Spinner from './Spinner';
import PageNotFound from './PageNotFound';

export default function Table(coin){
   const {id}=useParams();
    const {data: coins, loading, error} =useFetch(
        `coins/${id}`
    );
    if (loading) return <Spinner/>
    if (!coins) return <PageNotFound />
    if (error) throw error;
    return (
        <div>


        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Sym</th>
              <th>MarketCap</th>
              <th>Price</th>
              <th>24Hr</th>
              <th>24Hr</th>
            </tr>
          </thead>
          <tbody>
          { (coins.length > 0) ? coins.map( (coin, key) => {
               const count = parseInt(key, 10)
               return (
                <tr key={ key }>
                  <td>{ 1 + count}</td>
                  
                  <td  click={()=>this.getCoin(key)}></td>
                  <td>{ coin.CoinInfo.Name}</td>
                  <td>{ coin.DISPLAY.USD.MKTCAP }</td>
                  <td>{ coin.DISPLAY.USD.PRICE }</td>
                  <td>{coin.DISPLAY.USD.CHANGE24HOUR }</td>
             
    
                </tr>
              )
             }) : <tr><td colSpan="5">Loading...</td></tr> }
          </tbody>
        </table>
    
        </div>
    )
}