import styled from "styled-components";
import { mobile, colors } from "../../Helper/styleHelper";

export const ContainerCard = styled.div`
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.24);
  border-radius: 6px;
  border-color:${colors.brown};
  border-width: 6px;
  border-style: dashed solid;
  background: ${colors.brown2};
  width: 30%;
  min-width: 200px;
  height: 200px;
  margin: 0 1% 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: ${mobile})  {
    width: 100%;
  }
`;
export const Name = styled.p`
  margin: 12px auto;
  font-family: Roboto;
  font-weight: 700;
  font-size:150%;
  color: ${colors.black}
  text-overflow: ellipsis;
`;
export const Inf = styled.p`
  margin: 0 auto 6px;
  font-family: Roboto;
  font-weight: 500;
  font-size:120%;
  color: ${colors.black}
`;
