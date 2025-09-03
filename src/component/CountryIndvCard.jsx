
import { useLoaderData, useNavigate, useParams } from "react-router";
import "../App.css"
export const CountryIndivCard=()=>{
const param=useParams();
const data=useLoaderData();
const navigate=useNavigate();

console.log(param);
console.log(data.data[0]);

    const {flags,name,capital,population,region,tld,subregion,languages,currencies}=data.data[0]
  
  
  
  const handleGoBack=()=>{
    navigate(-1)
  }
  
  
  
  
  
  
  
  
  
    return(
        <>
        <ul className="container">
              <li className="CardsInd">
                    <div className="image"><img src={`${flags.png}`} alt={`${name.common},picture`} /></div>
<div className="cardInd-info">
    <h1>{name.common}</h1>


<div className="native"><span>Native name:</span>{Object.values(name.nativeName)[0].official}</div>



<div className="capital"><span>Capital:</span>:{capital}</div>
<div className="population"><span>Population:</span>{population}</div>
<div className="region"><span>Region:</span>{region}</div>
<div className="subregion"><span>subregion:</span>{subregion}</div>
<div className="Domain"><span>Top Level Domain:</span>{tld}</div>
<div className="language"><span>language:</span>{Object.values(languages)[0]}</div>
<div className="language"><span>currencies:</span>{Object.values(currencies)[0].name}</div>


{/* <div className="languages"><span>currencies:</span>{Object.values(currencies).map((cur)=>{
    // console.log(cur);
    return(<div>{cur},</div>)


})}</div> */}
                            
</div>

<button className="back-btn" onClick={handleGoBack}>Go Back</button>
</li>
 </ul>       </>

    )
}