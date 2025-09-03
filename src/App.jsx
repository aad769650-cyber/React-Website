import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./component/Home";
import { Error } from "./component/Error";
import { AppLayout } from "./Layout/Applayout";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Country } from "./component/Country";
import { getContactDetail } from "./component/getContactDetail";
import { getApiData, getIndCardDetail } from "./api/getApiData";
import { CountryIndivCard } from "./component/CountryIndvCard";

const App=()=>{
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error></Error>,


      children:[
        {
        path:"/about",
        element:<About></About>

      },
         {
        path:"/",
        element:<Home></Home>

      },
           {
        path:"/country",
        element:<Country></Country>,
        loader:getApiData,

      },
           {
        path:"/contact",
        element:<Contact></Contact>,
        action:getContactDetail,

      },
    {
      path:"/country/:id",
      element:<CountryIndivCard/>,
      loader:getIndCardDetail,
    }
    
    ]
    }
  ])
  
  
  
  return(
    <>


    <RouterProvider router={router}/>
    
    </>
  )
}

export default App;