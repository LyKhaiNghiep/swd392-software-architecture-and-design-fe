import React, { useEffect, useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from "../../assets/images/login-img.jpg";
import { Image } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import * as UserSevice from '../../services/UserSevice'
import { useMutationHooks } from "../../hooks/useMutationHooks";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from '../../components/Message/Message'

const SignUpPage = () => {
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [username,setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnChangeUsername = (value) => {
    setUsername(value);
  };

  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };

  const mutation = useMutationHooks(
    data => UserSevice.signupUser(data)
  )
  const { data, isLoading, isSuccess, isError, error } = mutation
  // console.log('mutation', mutation)


  useEffect(() => {
    if (isSuccess) {
      message.success()
      handleNavigateLogin()
    } else if (isError) {
      message.error(error?.response?.data?.message || "Signup failed. Please try again.");
    }
  }, [isSuccess, isError])

  const handleOnChangePassword = (value) => {
    setPassword(value);
  };
  const handleOnChangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  const handleSignUp = () => {
    mutation.mutate({username, email, password, confirmPassword })
    // console.log("sign-up", email, password, confirmPassword);

  };

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
          <p>Tạo tài khoản</p>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc"
            value={username}
            onChange={handleOnChangeUsername}
          />
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
              style={{ marginBottom: "10px" }}
              placeholder="Password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnChangePassword}
            />
          </div>
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowConfirmPassword ? (
                <EyeOutlined />
              ) : (
                <EyeInvisibleOutlined />
              )}
            </span>
            <InputForm
              style={{ marginBottom: "10px" }}
              placeholder="Password"
              type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleOnChangeConfirmPassword}
            />
          </div>
          {data?.status === 'error' && <span>{data?.message}</span>}
          {/* <Loading isLoading={isLoading}> */}
          <ButtonComponent
            disabled={
              !email.length || !password.length || !confirmPassword.length
            }
            onClick={handleSignUp}
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
            textButton={"Đăng ký"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          {/* </Loading> */}
          <p>
            Bạn đã có tài khoản ?{" "}
            <WrapperTextLight onClick={handleNavigateLogin}>
              Đăng nhập
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

export default SignUpPage;
