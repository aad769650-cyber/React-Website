import axios from "axios";

const api=axios.create({
    baseURL:`https://restcountries.com/v3.1`
})


export const getApiData=async()=>{
 return(await api.get(`/all?fields=name,population,region,capital,flags`))
    // console.log(res);

    
}

export const getIndCardDetail=({params})=>{

console.log(params);
return (api.get(`/name/${params.id}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`))

   
}