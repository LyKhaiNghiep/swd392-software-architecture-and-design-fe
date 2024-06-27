import React, { useEffect, useState } from 'react'
import InputForm from '../../components/InputForm/InputForm'
import { WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel } from './style'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import * as UserSevice from '../../services/UserSevice'
import { useMutationHooks } from '../../hooks/useMutationHooks'
import Loading from '../../components/LoadingComponent/Loading'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { error } from '../../components/Message/Message'

const ProfilePage = () => {
      // const user = useSelector((state) => state.user);
  const user = JSON.parse(localStorage.getItem('user'));
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const mutation = useMutationHooks(
    (id, data) => UserSevice.updateUser(id, data)
  )

  const dispatch = useDispatch()

  const {data, isLoading, isSuccess, isError} = mutation
  console.log('data', data)

  useEffect(() => {
    setEmail(user?.email)
    setUsername(user?.username)
    setPassword(user?.password)
  }, [user])

  useEffect(() => {
    if (isSuccess) {
      message.success()
      // handleGetDetailsUser(user?.id, user?.access_token)

    } else if (isError) {
      message.error()
    }
  }, [isSuccess, isError])

  // const handleGetDetailsUser = async(id, token) => {
  //   const res = await UserSevice.getDetailsUser(id,token)
  //   dispatch(UserSevice.updateUser({...res?.data, access_token: token}))
  //   console.log('res', res)
  // }

  const handleOnChangeEmail = (value) =>{
    setEmail(value)
  }

  const handleOnChangeName = (value) =>{
    setUsername(value)
  }
  const handleOnChangePassword = (value) =>{
    setPassword(value)

  }


  const handleUpdate = () =>{
    mutation.mutate(user?.id, {email, username, password})
    if(isSuccess){
        message.success()
    }else if(isError){
       message.error()
    }
    // console.log('update', email, username, password)
  }
  return (
    <div style={{width: '1270px', margin: '0 auto', height: '500px'}}>
        <WrapperHeader>Thông tin người dùng</WrapperHeader>
        {/* <Loading isLoading={{isLoading}}> */}
        {/* </Loading> */}
        <WrapperContentProfile>
          
          <WrapperInput>
            <WrapperLabel htmlFor='email'>Email</WrapperLabel>
            <InputForm style={{width: '300px'}} id="email" value={email} onChange={handleOnChangeEmail}/>  
            <ButtonComponent
                onClick={handleUpdate}
                // bordered={false}
                size={40}
                styleButton={{
                  height: "30px",
                  width: "fit-content",
                  borderRadius: "4px",
                  margin: "2px 6px 6px",
                }}
                textButton={"Cập nhật"}
                styleTextButton={{
                  color: "rgb(26, 148, 255)",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
            ></ButtonComponent>
          </WrapperInput>

          <WrapperInput>
            <WrapperLabel htmlFor='username'>Name</WrapperLabel>
            <InputForm style={{width: '300px'}} id="username" value={username} onChange={handleOnChangeName}/>  
            <ButtonComponent
                onClick={handleUpdate}
                // bordered={false}
                size={40}
                styleButton={{
                  height: "30px",
                  width: "fit-content",
                  borderRadius: "4px",
                  margin: "2px 6px 6px",
                }}
                textButton={"Cập nhật"}
                styleTextButton={{
                  color: "rgb(26, 148, 255)",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
            ></ButtonComponent>
          </WrapperInput>

          <WrapperInput>
            <WrapperLabel htmlFor='password'>Password</WrapperLabel>
            <InputForm style={{width: '300px'}} id="password" value={password} onChange={handleOnChangePassword}/>  
            <ButtonComponent
                onClick={handleUpdate}
                // bordered={false}
                size={40}
                styleButton={{
                  height: "30px",
                  width: "fit-content",
                  borderRadius: "4px",
                  margin: "2px 6px 6px",
                }}
                textButton={"Cập nhật"}
                styleTextButton={{
                  color: "rgb(26, 148, 255)",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
            ></ButtonComponent>
          </WrapperInput>

        </WrapperContentProfile>
    </div>
  )
}

export default ProfilePage
