import styled from "styled-components";
import { mobile, colors } from "../../Helper/styleHelper";

export const Container = styled.div`
  width: 90%;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${mobile}) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 54px;
  margin: 0 auto;
  border-radius: 27px;
  border: 1px solid $gray4;
  padding: 0 24px;
  box-sizing: border-box;
  outline: none;
  font-weight: 400;
  text-overflow: ellipsis;
  font-size: 15px;
  ${(props) =>
    props.city
      ? `
  border-radius: 6px 6px 0 0;
  border-bottom: none;`
      : ``}
`;
export const Buttom = styled.button`
  width: 20%;
  height: 40px;
  margin-bottom: 10px;
  border-color: ${colors.brown};
  border-width: 6px;
  border-style: dashed solid;
  background: ${colors.brown2};
  border-radius: 6px;
  cursor: pointer;
  font-family: Roboto;
  font-weight: 500;
  font-size: 120%;
  @media (max-width: ${mobile}) {
    width: 100px;
  }
`;

export const DropDown = styled.div`
  ${(props) => {
    return props.city === "" ? `visibility: hidden` : `visibility: visible`;
  }};
  position: absolute;
  top: 90px;
  right: 0;
  max-height: 350px;
  transition: max-height 0.3s linear;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 24px 24px;
  box-sizing: border-box;
  border: 1px solid ${colors.black};
  border-top: none;
  border-radius: 0 0 6px 6px;
  margin: 0 auto;
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  z-index: 1;
  &::-webkit-scrollbar {
    width: 6px;
    @media (max-width: ${mobile}) {
      width: 0;
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &.hidden {
    max-height: 0;
    padding: 0;
    border: none;
    transition: all 0.2s linear;
  }
  &:hover {
    &::-webkit-scrollbar {
      width: 6px;
      @media (max-width: ${mobile}) {
        width: 0;
      }
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.brown};
      border-radius: 6px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${colors.white};
    }
  }
`;

export const P = styled.p`
  font-size: 23px;
`;
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  margin: 24px auto 0;
  @media (max-width: ${mobile}) {
    justify-content: center;
  }
`;
