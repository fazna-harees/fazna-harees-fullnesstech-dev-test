import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

export const UiCard = styled.div`
  min-width: 240px;
  max-width: 350px;
  background: white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);
  border-radius: 3px;
  padding: 20px 20px;
  margin: 20px 5px;
`;
export const UiBox = styled.div`
  padding: 15px 10px;
  width: 50%;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
`;

export const SubHeading = styled.div`
  color: gray;
  font-size: 12px;
`;

export const Heading = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Title = styled.div`
  text-align: left;
  margin-bottom: 10px;
  min-height:60px;
`;
export const CheckFlexBox = styled.div`
  color: gray;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
export const CheckIcon = styled(FaCheck)`
  float: left;
  margin-right: 10px;
  margin-top: 7px;
  font-size: 10px;
  color: black;
`;

export const GreenButton = styled.button`
  display: flex;
  cursor: pointer;
  padding: 0px 10px;
  flex-direction: row;
  background: green;
  height: 40px;
  border-radius: 5px;
  border: 0;
  color: white;
  font-size: 15px;
  justify-content: center;
  align-items: center;
`;
export const ProsDiv = styled.div`
  min-height: 100px;
`;
export const SpecialLink = styled.a`
  text-decoration: underline;
  color: gray;
  font-weight: bold;
`;

export const HR = styled.hr`
  margin: 10px 0px;
  color: lightgray;
  size: 0.5;
`;
