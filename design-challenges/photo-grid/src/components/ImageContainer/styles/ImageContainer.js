import styled from "styled-components";

export const Container = styled.ul`
  width: 80%;
  background-color: #d6e0f0;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Generate = styled.button`
  background-color: #66bfbf;
  color: white;
  font-size: 1.3rem;
  border-style: none;
  padding: 0.5rem;
  width: 20%;
  margin: 1rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background: #056674;
    cursor: pointer;
  }
`;
