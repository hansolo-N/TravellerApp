import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFormRow = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.2rem;
  grid-template-columns: 24rem;
  gap: 2.4rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: red;
`;

function FormRow({ label, children, error }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      <Error>{error}</Error>
    </StyledFormRow>
  );
}

FormRow.propTypes = {
  label: PropTypes.string,
  error: PropTypes.any,
  children: PropTypes.any,
  id: PropTypes.string,
};

export default FormRow;
