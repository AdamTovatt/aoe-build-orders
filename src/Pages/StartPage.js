import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Event from "../Components/Event";

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
    </CenterContainer>
  );
};

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
