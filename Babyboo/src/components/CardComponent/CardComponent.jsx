import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
//tạo prop lấy attribute product
// const CardComponent = (props) => {
//   const { countInStock, description, image, name, price, rating, type } = props;

  const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 200 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <img
        src={logo}
        style={{
          width: "68px",
          height: "14px",
          position: "absolute",
          top: -1,
          left: -1,
          borderTopLeftRadius: "3px",
        }}
      />
      {/* <StyleNameProduct>{name}</StyleNameProduct> */}
      <StyleNameProduct>Sữa bột Bimbosan Stage 2 400g cho bé 6-12 tháng</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>

          {/* <span>{rating}</span><StarFilled style={{ fontSize: "12px", color: "yellow" }} /> */}
          <span>4.5 </span><StarFilled style={{fontSize: '12px', color:'yellow'}} />

        </span>
        <span>|đã bán 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>

        {/* <span style={{ marginRight: "8px" }}>{price}</span> */}
        <span style={{ marginRight: "8px" }}>1.000.000đ</span>

        <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
