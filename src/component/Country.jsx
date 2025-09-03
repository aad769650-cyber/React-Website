import { NavLink, useLoaderData, useNavigation } from "react-router";
import { Loading } from "./Loading";
import { useEffect, useState } from "react";
import { CountryCard } from "./CountryCard";

export const Country=()=>{






   const apiData=useLoaderData()
const [data,setData]=useState([]);
// const [filter,setFilter]=useState(apiData.data);
const [search,setSearch]=useState('')
const [option,setOption]=useState('all')
// const [find,setFind]=useState(apiData)


useEffect(()=>{
    setData(apiData.data)

    
},[])
    // console.log(data);

    // console.log(apiData.data)  ;

// console.log("hello");

// apiData.data.map((curr)=>{
//     // console.log(curr);
//     const {capital,flags,name,population,region}=curr;

//     console.log(capital[0],flags.png,name.official,population,region);
    
// })

const load=useNavigation();
// console.log(load);
if(load.state=="loading"){
    return<Loading></Loading>
};
 
     
     
     
    
     
     
     
     const searchCountry=(curr)=>{
        // console.log(search);
        
  if(search){
      return(curr.name.common.toLowerCase().includes(search.toLowerCase()))
  }
  else{
    return curr;
  }
}

const filterCountry=(curr)=>{
    // console.log(curr);
    
if(option=="all"){
    // console.log(curr);
    
    return curr

}
    else
        {return(
curr.region==option
    )}
}
const filtered=data.filter((curr)=>{
    // console.log(curr.name.common.toLowerCase());
    
// console.log(    curr.name.common.toLowerCase().includes(e.target.value.toLowerCase())
// );
// console.log(data);

    // return (curr.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    // console.log(searchCountry(curr))
    // console.log(filterCountry(curr));
    
    
    return (searchCountry(curr)&&filterCountry(curr))
})
// console.log(filtered);

// setFilter(filtered)

     
    //  console.log(filtered);
     
     
     
     
     
     
     
     return (<>
    
   <CountryCard   option={option} setOption={setOption} search={search} setSearch={setSearch} data={data} setData={setData}/>
 
 <div className="country">
      <ul className="card-parent">
           {
filtered.map((curr,idx)=>{
    // console.log(curr);
    const {capital,flags,name,population,region}=curr;

    // console.log(capital[0],flags.png,name,population,region);
    return(
    <>
    <li className="card" key={idx}>
        <div className="image"><img src={`${flags.png}`} alt={`${name.official},picture`} /></div>
<h1>{name.common}</h1>


<div className="capital"><span>Capital</span>:{capital}</div>
<div className="population"><span>Population</span>{population}</div>
<div className="region"><span>Region</span>{region}</div>
<button className="btn"><NavLink to={`/country/${name.common}` }>Read More</NavLink></button>
    </li>
    
    </>)
})
           }
        </ul>
    
    </div>
    </>)
    
}
//  }