import styled from "styled-components";
import { Color } from "../Constants";

const Icon = ({ source, text }) => {
  return (
    <IconContainer>
      {source ? (
        <IconElement src={source} />
      ) : (
        <EmptyIconElement></EmptyIconElement>
      )}
      {text ? (
        <IconTextContainer>
          <IconText>{text}</IconText>
        </IconTextContainer>
      ) : null}
    </IconContainer>
  );
};

const EmptyIconElement = styled.div`
  width: 4rem;
  height: 4rem;
`;

const IconTextContainer = styled.div`
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.4);
  border-radius: 8px;
`;

const IconText = styled.div`
  top: 1.5rem;
  text-align: center;
  width: 4rem;
  font-family: "Jost";
  font-weight: 500;
  font-size: 2rem;
  color: ${Color.White};
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const IconContainer = styled.div`
  position: relative;
  margin: 1rem;
`;

const IconElement = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 8px;
`;

export default Icon;
