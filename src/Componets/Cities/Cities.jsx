import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Container, Li } from "./styled";

const Cities = ({ timeZones, setTimeZones, city }) => {
  return (
    <Container
      onClick={() =>
        timeZones.includes(city)
          ? setTimeZones(timeZones.filter((timeZone) => timeZone !== city))
          : setTimeZones([...timeZones, city])
      }
    >
      <Li>
        {timeZones.includes(city) ? <IoIosCheckmarkCircle /> : null}
        <p>{city}</p>
      </Li>
    </Container>
  );
};

export default Cities;
