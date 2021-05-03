import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Buttom,
  Input,
  DropDown,
  P,
  ContainerCards,
} from "./styled";
import Cities from "../Cities/Cities";
import axios from "axios";
import CityCard from "../CityCard/CityCard";

const Home = () => {
  const [timeZones, setTimeZones] = useState([]);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    //  if(cities.length === 0){
    axios
      .get("http://localhost:8000/api/timezones")
      .then((res) => setCities(res.data));
    //  }
  }, []);
  console.log(cities);

  return (
    <Container>
      {cities.length === 0 ? (
        <P>Cargando ciudades ...</P>
      ) : (
        <Form onSubmit={handleSubmit}>
          {city ? <Buttom onClick={() => setCity("")}>Close</Buttom> : null}
          <Input
            placeholder="Enter your city. Example: 'Africa/Abidjan'"
            onChange={handleChange}
            city={city}
          />
          <DropDown city={city}>
            {city
              ? cities.map((c, key) =>
                  c.includes(city) ? (
                    <Cities
                      key={key}
                      timeZones={timeZones}
                      setTimeZones={setTimeZones}
                      city={c}
                    />
                  ) : null
                )
              : null}
          </DropDown>
        </Form>
      )}
      <ContainerCards>
        {timeZones.length
          ? timeZones.map((timeZone, key) => (
              <CityCard
                key={key}
                timeZone={timeZone}
                setTimeZones={setTimeZones}
                timeZones={timeZones}
              />
            ))
          : null}
      </ContainerCards>
    </Container>
  );
};

export default Home;
