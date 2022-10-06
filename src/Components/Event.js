import styled from "styled-components";
import { Color, BorderRadius, Icons } from "../Constants";
import Icon from "./Icon";

const Event = ({ eventInfo }) => {
  console.log(eventInfo);

  return (
    <ActionBackground>
      <Icon
        source={Icons[eventInfo.triggerIcon]}
        text={eventInfo.triggerText}
      />
      <Icon />
      {eventInfo.actionIcons.map((actionIcon) => {
        return <Icon source={Icons[actionIcon.icon]}></Icon>;
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
