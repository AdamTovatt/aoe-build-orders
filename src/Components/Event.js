import styled from "styled-components";
import { Color, BorderRadius, Icons } from "../Constants";
import Icon from "./Icon";

const Event = ({ eventInfo }) => {
  return (
    <ActionBackground>
      {eventInfo.icons.map((icon, index) => {
        return (
          <Icon
            key={eventInfo.triggerText + index}
            source={Icons[icon.image]}
            text={icon.text}
          ></Icon>
        );
      })}
    </ActionBackground>
  );
};

const ActionText = styled.div`
  padding: 1rem;
  color: ${Color.Dark};
  font-family: "Jost";
  font-weight: 500;
`;

const ActionBackground = styled.div`
  min-height: 5rem;
  min-width: 12rem;
  background-color: ${Color.Green};
  border-radius: ${BorderRadius.Default};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`;

export default Event;
