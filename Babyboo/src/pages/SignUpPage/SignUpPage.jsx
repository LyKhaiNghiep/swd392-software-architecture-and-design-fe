import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/login-img.jpg'
import { Image } from 'antd'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const SignUpPage = () => {
  const{isShowPassword, setIsShowPassword} = useState(false)
  const{isShowConfirmPassword, setIsShowConfirmPassword} = useState(false)

  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'center', background:'rgba(0,0,0,0.53)', height:'100vh'}}>
      <div
        style={{
          display: "flex",
          width: "800px",
          height: "445px",
          backgroundColor: "#fff",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Tạo tài khoản</p>
          <InputForm style={{marginBottom: "10px"}} placeholder="abc@gmail.com"/>
          <div style={{position:"relative"}}>
            <span style={{zIndex: 10, position:"absolute",top:"4px", right:"8px"}}>
              {
                isShowPassword ? (<EyeOutlined />) : (<EyeInvisibleOutlined />)
              }
            </span>
            <InputForm style={{marginBottom: "10px"}} placeholder="Password" type={isShowPassword ? "text" : "password"} />
          </div>
          <div style={{position:"relative"}}>
            <span style={{zIndex: 10, position:"absolute",top:"4px", right:"8px"}}>
              {
                isShowConfirmPassword ? (<EyeOutlined />) : (<EyeInvisibleOutlined />)
              }
            </span>
            <InputForm style={{marginBottom: "10px"}} placeholder="Password" type={isShowConfirmPassword ? "text" : "password"} />
          </div>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: "#D37C70",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px"
            }}
            textButton={"Đăng nhập"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <p>Bạn đã có tài khoản ? <WrapperTextLight>Đăng ký</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt="image-logo" height="445px" width="400px"/>
          {/* <h4>Mua sắm tại BabyBoo</h4> */}
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage
