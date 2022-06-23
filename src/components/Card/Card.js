import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import {
  UiBox,
  SubHeading,
  Heading,
  CheckFlexBox,
  CheckIcon,
  GreenButton,
  UiCard,
  Title,
  FlexBox,
  ProsDiv,
  SpecialLink,
} from "./Card.styles";

const Box = ({ title, rate }) => {
  return (
    <UiBox>
      <SubHeading>{title}</SubHeading>
      <Heading>{rate}%</Heading>
    </UiBox>
  );
};

const CheckItems = ({ text }) => {
  return (
    <CheckFlexBox>
      <CheckIcon />
      {text}
    </CheckFlexBox>
  );
};

const SpecialButton = ({ url }) => {
  return (
    <a href={url}>
      <GreenButton>
        Go to Site
        <FaArrowAltCircleRight style={{ marginLeft: "10px" }} size={16} />
      </GreenButton>
    </a>
  );
};

export default function Card({ data }) {
  return (
    <UiCard>
      <Title>{data.name}</Title>
      <FlexBox>
        <Box title="Advertised Rate" rate={data.advertisedRate} />
        <Box title="Comparison Rate" rate={data.comparisonRate} />
      </FlexBox>
      <div style={{ padding: "8px 0px", textAlign: "left" }}>
        <ProsDiv>
          {data.pros.length > 4
            ? data.pros.slice(0, 4)?.map((pros) => <CheckItems text={pros} />)
            : data.pros?.map((pros) => <CheckItems text={pros} />)}
        </ProsDiv>
      </div>
      <hr color="gray" size={1} />
      <div style={{ padding: "8px 0px" }}>
        <FlexBox
          style={{ justifyContent: "space-between", margin: "10px 0px" }}
        >
          <div>
            <input type="checkbox" />
            Compare
          </div>
          <div>
            <SpecialLink href={data.applyUrl} target="_blank">
              More Information
            </SpecialLink>
          </div>
        </FlexBox>
      </div>
      <hr color="gray" size={1} />

      <FlexBox style={{ margin: "15px 0px", alignItems: "center" }}>
        <img
          src={data.companyLogo}
          width="50%"
          style={{ marginRight: "10px" }}
          alt="logo"
        />
        <SpecialButton url={data.gotoSiteUrl} />
      </FlexBox>
    </UiCard>
  );
}
