import styled from "styled-components";

export const glassBox = styled.div`
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1;
`;

export const PageContainer = styled.div`
  width: 95vw;
  margin: auto;
  // display: flex;

  section {
    margin-bottom: 1.6em;
    margin-top: 1.6em;
  }

  @media screen and (max-width: 768px) {
    width: 99vw;
  }
`;
