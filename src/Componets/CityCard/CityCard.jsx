import axios from "axios";
import React, { useState, useEffect } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { timing } from "../../Helper/Timing";
import { ContainerCard, Name, Inf } from "./styled";

const CityCard = ({ timeZone, timeZones, setTimeZones }) => {
  const [timeZoneData, setTimeZoneData] = useState({});

  useEffect(() => {
    let name = timeZone.replace("/", "_");

    axios
      .get(`http://localhost:8000/api/timezones/${name}`)
      .then((res) => setTimeZoneData(timing(res.data)));
  }, []);

  useEffect(() => {
    let name = timeZone.replace("/", "_");
    const timeout = setTimeout(() => {
      axios
        .put(`http://localhost:8000/api/timezones/${name}`)
        .then((res) => setTimeZoneData(timing(res.data)));
    }, 5000);

    return () => clearTimeout(timeout);
  });
console.log(timeZoneData)
  return (
    <ContainerCard>
      <RiCloseCircleFill
        onClick={() =>
          setTimeZones(timeZones.filter((current) => current !== timeZone))
        }
      />
      <Name className="name">{timeZone}</Name>
      <Inf className="data">{timeZoneData.date}</Inf>
      <Inf className="data">{timeZoneData.time}</Inf>
    </ContainerCard>
  );
};

export default CityCard;
