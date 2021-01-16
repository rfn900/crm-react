import React from "react";
import styled from "styled-components";
import EmailIcon from "@material-ui/icons/Email";
import FontDownloadOutlinedIcon from "@material-ui/icons/FontDownloadOutlined";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import LanguageIcon from "@material-ui/icons/Language";
import { DashboardWrapperStyled } from "../styles/DashboardWrapperStyled";
import { ButtonStyled } from "../styles/ButtonStyled";
import { InputStyled } from "../styles/InputStyled";
import { InputContainerStyled } from "../styles/InputContainerStyled";

const InputACStyled = styled(InputStyled)`
  margin-top: 10px;
`;
const InputContainerACStyled = styled(InputContainerStyled)`
  span {
    margin-top: 8px;

    svg {
      opacity: 0.75;
    }
  }
  &:first-child {
  }
`;
const ContainerACStyled = styled(DashboardWrapperStyled)`
  align-items: center;
`;

export default function CustomerDetailForm({
  title,
  onSubmit,
  onChange,
  formData,
}) {
  const renderInput = (name, label, Icon, type) => {
    //console.log(formData[name], "bunda");
    return (
      <InputContainerACStyled>
        <InputACStyled
          type={type || "text"}
          name={name}
          placeholder={label}
          value={formData ? formData[name] : ""}
          onChange={onChange}
        />
        <span className="email-span">{Icon}</span>
      </InputContainerACStyled>
    );
  };
  return (
    <ContainerACStyled>
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>
        {renderInput("name", "Customer Name", <FontDownloadOutlinedIcon />)}
        {renderInput("email", "Customer Email", <EmailIcon />, "type")}
        {renderInput(
          "organisationNr",
          "Organisation Number",
          <FormatListNumberedIcon />
        )}
        {renderInput(
          "paymentTerm",
          "Payment Term",
          <MonetizationOnIcon />,
          "number"
        )}
        {renderInput("phoneNumber", "Phone Number", <PhoneIcon />, "number")}
        {renderInput("reference", "Reference", <DescriptionOutlinedIcon />)}
        {renderInput("vatNr", "VAT Number", <ShowChartIcon />)}
        {renderInput("website", "Website", <LanguageIcon />)}
        <ButtonStyled type="submit">{title}</ButtonStyled>
      </form>
      {/* {JSON.stringify(formData)} */}
    </ContainerACStyled>
  );
}
