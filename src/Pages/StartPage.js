import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Event from "../Components/Event";
import { Color } from "../Constants";

const StartPage = ({ fileName }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function GetData() {
      let response = await fetch("Data/CastleRush.json");
      let json = await response.json();
      setData(json);
      console.log(json);
    }
    if (!data) GetData();
  }, [data]);

  return (
    <CenterContainer>
      <BuildorderContainer>
        <Header>Castle Age Rush</Header>
        <EventContainer>
          {data ? (
            <>
              {data.events.map((event, index) => {
                return (
                  <EventLine>
                    <Event key={index} eventInfo={event}></Event>
                  </EventLine>
                );
              })}
            </>
          ) : null}
        </EventContainer>
      </BuildorderContainer>
    </CenterContainer>
  );
};

const Header = styled.div`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 5rem;
  font-family: "Jost";
  color: ${Color.White};
`;

const BuildorderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventLine = styled.div`
  margin-right: 5rem;
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 80vw;
  max-height: 55rem;
`;

const CenterContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StartPage;
