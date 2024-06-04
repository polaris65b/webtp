import React from "react";
import DDay from "../components/DDay";

const Home = () => {
  const eventDate = "2024-12-25"; // Example event date

  return (
    <div>
      <h2>한기대 유일무이 밴드 동아리</h2>
      <DDay eventDate={eventDate} />
    </div>
  );
};

export default Home;
