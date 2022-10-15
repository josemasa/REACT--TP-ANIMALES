import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <FOOTER>
        <div>
          <h1>aqui va el footer</h1>
          <ul>
            <li>uno</li>
            <li>dos</li>
            <li>tres </li>
            <li>cuastro</li>
          </ul>
        </div>
      </FOOTER>
    </>
  );
}

export default Footer;

const FOOTER = styled.div`
  div {
    margin-top: 20px;
    padding: 20px;
    color: white;
    background-color: black;
  }
`;
