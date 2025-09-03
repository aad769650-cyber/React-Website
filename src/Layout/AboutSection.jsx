import Card from "../api/countryCards.json"

export const AboutSection=()=>{
    return(
        <>
       <div className="about-heading">
        <h1 className="facts">
            Here are the Interesting Facts
we’re proud of 
        </h1>
       </div>


        <div className="AboutCards">
            <ul className="about-Ul">
                {
                    Card.map((curr)=>{
                        const {countryName,capital,population,interestingFact}=curr
                        return(
                            <>
                            
                            <li className="Cards">
                                <div className="countryName">{countryName}</div>
                                <div className="capital"><span>Capital:</span>{capital}</div>
                                <div className="population"><span>Population:</span>{population}</div>
                                <div className="Fact"><span>InterestingFact:</span>{interestingFact}</div>
                            </li>
                            </>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}