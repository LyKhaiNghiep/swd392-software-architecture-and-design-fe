import React, { useState, useEffect} from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageLogo from "../../assets/images/login-img.jpg";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import * as UserSevice from '../../services/UserSevice'
import { useMutationHooks } from "../../hooks/useMutationHooks";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from '../../components/Message/Message' ;
import { jwtDecode } from "jwt-decode";
import {useDispatch} from "react-redux";
import { updateUser } from "../../redux/slides/userSlide";

const SignInPage = () => {


  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const mutation = useMutationHooks(
    data => UserSevice.loginUser(data)
  )
  const {data, isLoading, isSuccess} = mutation

  useEffect(() => {
    if(isSuccess){
      message.success()
      navigate('/')
      // console.log('data', data)
      localStorage.setItem('access_token', data?.access_token)
      if(data?.access_token) {
        const decoded = jwtDecode(data?.access_token)
        console.log('decode',decoded)
        if (decoded?.id) {
          // handleGetDetailsUser(decoded?.id, data?.access_token)
        }
      }
    }
  },[isSuccess])

  // const handleGetDetailsUser = async(id, token) => {
  //   const res = await UserSevice.getDetailsUser(id,token)
  //   dispatch(updateUser({...res?.data, access_token: token}))
  //   console.log('res', res)
  // }

  console.log('mutation', mutation)

  const handleNavigateSignUp = () => {
    navigate("/sign-up");
  };

  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnChangePassword = (value) => {
    setPassword(value);
  };

  const handleSignIn = () => {
    mutation.mutate({
      email,
      password
    })
    console.log('sign-in', email, password)
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
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
          <p>Đăng nhập</p>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleOnChangeEmail}
          />
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </span>
            <InputForm
              placeholder="Password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnChangePassword}
            />
          </div>
              {/* {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>} */}
          {/* <Loading isLoading={isLoading}> */}
            <ButtonComponent
              disabled={!email.length || !password.length}
              onClick={handleSignIn}
              // bordered={false}
              size={40}
              styleButton={{
                background: "#D37C70",
                height: "48px",
                width: "100%",
                border: "none",
                borderRadius: "4px",
                margin: "26px 0 10px",
              }}
              textButton={"Đăng nhập"}
              styleTextButton={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
              }}
            ></ButtonComponent>
          {/* </Loading> */}
          <p>
            <WrapperTextLight>Quên mật khẩu ?</WrapperTextLight>
          </p>
          <p>
            Chưa có tài khoản ?{" "}
            <WrapperTextLight onClick={handleNavigateSignUp}>
              Tạo tài khoản
            </WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="image-logo"
            height="445px"
            width="400px"
          />
          {/* <h4>Mua sắm tại BabyBoo</h4> */}
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
