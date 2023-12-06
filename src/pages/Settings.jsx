import React from "react";
import UpdateUserDataForm from "../authentication/UpdateUserDataForm";
import Logo from "../components/Logo";
import styled from "styled-components";

const PageContainer = styled.div`
  background-color: #2d3439;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Profile() {
  return (
    <PageContainer>
      <Logo />
      <UpdateUserDataForm />
    </PageContainer>
  );
}
