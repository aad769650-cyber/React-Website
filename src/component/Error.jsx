import { useNavigate } from "react-router"

export const Error=()=>{
    const navigate=useNavigate();
    const handleBack=()=>{
        navigate(-1)
    }
    return (
        <>
      
             <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
              className="error-img"
            />
             
            <div className="btn-container">
               
<button className="btn" onClick={handleBack}>GoBack</button>
   </div>
                     </>
    )
}