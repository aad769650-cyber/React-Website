export const CountryCard=({option,setOption,search,setSearch,data,setData})=>{

// console.log(option ,search);

    const handleChange=(e)=>{
// console.log(e.target.value);
setSearch(e.target.value)
 }
  
//  if(data!==null){
     
     
     
    const handleSelectChange=(e)=>{
     
        // console.log(e.target.value);
setOption(e.target.value)
// console.log(filter);

    //    const selectedOption= filter.filter((curr)=>{
    //         console.log(curr.region.toLowerCase()==e.target.value.toLowerCase());
    //         return (curr.region.toLowerCase()==e.target.value.toLowerCase())
    //     })
    //     console.log(selectedOption);
        
    //     setFilter(selectedOption)



        
    } 
     
     const handleOrder=(val)=>{
  const sorted=  [...data].sort((a,b)=>{
        // console.log(a);
        // console.log();
        
        
        return (val=="asc"?a.name.common.localeCompare(b.name.common):b.name.common.localeCompare(a.name.common))
    })

setData(sorted)

     }
    return (

        <>
        
        
    <div className="country">
<div className="search-sec">
     <input type="text" placeholder="Search your Country..." value={search} onChange={handleChange}/>
     <div className="Asc" onClick={()=>handleOrder("asc")}>Asc</div>
     <div className="Desc" onClick={()=>handleOrder("des")}>Desc</div>

     <label htmlFor="">
<select name="region" id="option" value={option} onChange={handleSelectChange}>
            <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
    
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
</select>
     </label>
</div>  


















    </div>
        
        </>
    )
}