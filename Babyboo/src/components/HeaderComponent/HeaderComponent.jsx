import React from "react";
import { Badge, Button, Col, Popover } from "antd";
import {
  WrapperContentPopup,
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
// import Search from 'antd/es/transfer/search';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as UserSevice from '../../services/UserSevice'



const HeaderComponent = () => {
  //lấy thông tin user khi đã đăng nhập
  // const user = useSelector((state) => state.user);
  // console.log("user", user);

  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };
  
    // Lấy thông tin người dùng từ localStorage
    const user = JSON.parse(localStorage.getItem('user'));
      console.log("user", user);

      const handleLogout = async () => {
        try {
          await UserSevice.logoutUser();
          // Xóa thông tin người dùng từ localStorage
          localStorage.removeItem("user");
          // Điều hướng về trang đăng nhập
          navigate("/");
        } catch (error) {
          console.error("Logout error", error);
        }
      };

  const content =(
    <div>
      <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
      <WrapperContentPopup onClick={() => navigate('/profile-user')}>Thông tin người dùng</WrapperContentPopup>
    </div>
  )
    
  return (
    <div
      style={{
        width: "100%",
        background: "#90C5EB",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WrapperHeader gutter={16}>
        <Col span={5}>
          <WrapperTextHeader>BABYBOO</WrapperTextHeader>
        </Col>
        <Col span={13}>
          <ButtonInputSearch
            size="32px"
            bordered={false}
            textButton="Tìm Kiếm"
            placeholder="input search text"
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "54px", alignItems: "center" }}
        >
          <WrapperHeaderAccount>
          <UserOutlined style={{ fontSize: "30px" }} />
            {/* Kiểm tra và hiển thị username nếu người dùng đã đăng nhập */}
            {user?.username ? (
              <>
                <Popover content={content} trigger="click">
                 <div style={{ cursor: "pointer" }}>{user.username}</div>
                </Popover>
              </>
            ) : (
              <div onClick={handleNavigateLogin} style={{ cursor: "pointer" }}>
                <WrapperTextHeaderSmall>
                  Đăng Nhập/Đăng ký
                </WrapperTextHeaderSmall>
                <div>
                  <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                  <CaretDownOutlined />
                </div>
              </div>
            )}
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}
              />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
