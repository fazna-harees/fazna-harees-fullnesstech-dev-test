import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  //   grid-template-rows: 50px 50px;
  grid-gap: 5px;
  justify-items: center;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Container = styled.div`
  padding: 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  background: #f7f7f7;
  @media (min-width: 1200px) and (max-width: 1300px) {
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Loading = styled.div`
  margin: auto;
`;
