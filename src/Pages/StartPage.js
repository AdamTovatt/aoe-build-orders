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
      {data ? (
        <>
          {data.events.map((event) => {
            return <Event key={event} eventInfo={event}></Event>;
          })}
        </>
      ) : null}
    </CenterContainer>
  );
};

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StartPage;
