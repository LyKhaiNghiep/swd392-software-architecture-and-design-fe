import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import Loading from "./components/LoadingComponent/Loading";

function App() {
  const user = useSelector((state) => state.user)
  // const dispatch = useDispatch();
  const[isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   setIsLoading(true)
  //   const {storageData, decoded} = handleDecoded()
  //   if(decoded?.id) {
  //     handleGetDetailsUser(decoded?.id, storageData)
  //   }
  // }, [])

  // const handleDecoded = () => {
  //   let storageData = localStorage.getItem('access_token')
  //   let decoded = {}
  //   if(storageData && isJsonString(storageData)){
  //     storageData = JSON.parse(storageData)
  //   }
  //   return {decoded, storageData}
  // }

  // UserService.axiosJWT.interceptors.request.use(async(config) => {
  //   const currentTime = new Date()
  //   const {decoded} = handleDecoded()
  //   if(decoded?.exp < currentTime.getTime() / 1000){
  //     const data = await UserService.refreshToken()
  //     config.headers['token'] = `Beare ${data?.access_token}`
  //   }
  //   return config;
  // }, (err) =>{
  //   return Promise.reject(err)
  // })

  // const handlegetDetailsUser = async(id, token) => {
  //   const res = await UserService.getDetailsUser(id,token)
  //   dispatch(updateUser({...res?.data,access_token: token}))
  // }
  //Uncomment when use api
  // const fetchApi = async () => {
  //   const res = axios.get(`${process.env.REACT_APP_API_URL}/products`);
  //   return (await res).data;
  // };

  // const query = useQuery({ queryKey: ["todos"], queryFn: fetchApi });

  // console.log('query',query)


  return (
    <div>
      <Loading isLoading={isLoading}>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const ischeckAuth = !route.isPrivate 
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={ischeckAuth ? route.path : ""}
                // path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
      </Loading>
    </div>
  );
}
export default App;
