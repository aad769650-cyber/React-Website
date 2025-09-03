import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import data from "../component/contact-info.json"


export const Footer=()=>{

    const icons={
        CiLocationOn:<CiLocationOn/>,
        RiContactsFill:<RiContactsFill/>,
        MdOutlineMail:<MdOutlineMail/>
    }
    return (
        <>





<div className="contact">
{
    data.map((curr)=>{
        const {find,Contact,icon}=curr;
        return(
            <>
            
            <div className="flex">
    <div className="icon-user">{icons[icon]}</div>
   <div className="contact-info">
     <p>{find}</p>
    <p>{Contact}</p>
   </div>
</div>
            </>
        )
    })
}





</div>



    <div className="footer">


<div className="footer"><div>Copyright@ maharTechnical.com</div></div>


    </div>

        </>
    )
}