import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import advisementICO from ".././img/man.png";
import reserchICO from ".././img/dean.png";
import CareerICO from ".././img/woman.png";
import FinanceICO from ".././img/money.png";
import DepartmentICO from ".././img/coding.png";
import Window from ".././Window/Window";
import clubsData from "../clubsData.json";
import ChatBot from "../ChatBot/ChatBot.jsx";

const Dashboard = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null);

  const openWindow = (clubName) => {
    const club = clubsData.clubs.find((c) => c.name === clubName);
    setSelectedClub(club); // Set the selected club's data
    setIsWindowOpen(true);
  };

  const closeWindow = () => {
    setIsWindowOpen(false);
    setSelectedClub(null); // Clear the selected club data when closing
  };

  return (
    <div className="Dashboard">
      <div className="container-dash">
        <div className="block-dash">
          <div className="button-group">
            <h4>People who can help you</h4>
            <a
              href="https://bmcc.cuny.edu/advisement"
              className="card-dash"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={advisementICO} alt="Advisement" className="dash-ico" />
              Student Advisement
            </a>
            <a
              href="https://bmcc.cuny.edu/student-research"
              className="card-dash"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={reserchICO}
                alt="Student Research"
                className="dash-ico"
              />
              Student Research
            </a>
            <a
              href={"https://bmcc.cuny.edu/career"}
              className="card-dash"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={CareerICO}
                alt="Career Advisement"
                className="dash-ico"
              />
              Career Advisement
            </a>
            <a
              href="https://bmcc.cuny.edu/financial-aid"
              className="card-dash"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={FinanceICO}
                alt="Financial Aid Office"
                className="dash-ico"
              />
              Financial Aid Office
            </a>
            <a
              href="https://bmcc.cuny.edu/department/cs"
              className="card-dash"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={DepartmentICO}
                alt="My Department"
                className="dash-ico"
              />
              My Department
            </a>
          </div>
        </div>

        <div className="block-dash">
          <div className="button-group">
            <h4>Clubs that are suggested for you</h4>
            <button
              onClick={() => openWindow("Computer Programming Club")}
              className="card-dash"
            >
              Computer Programming Club
            </button>
            <button
              onClick={() => openWindow("Digital Arts Club")}
              className="card-dash"
            >
              Digital Arts Club
            </button>
            <button
              onClick={() => openWindow("Women In Stem Club")}
              className="card-dash"
            >
              Women In Stem Club
            </button>
            <button
              onClick={() => openWindow("Robotics Club")}
              className="card-dash"
            >
              Robotics Club
            </button>
            <button onClick={() => openWindow("Gym")} className="card-dash">
              Gym
            </button>
          </div>
        </div>

        <div className="block-dash">
          <div className="button-group">
            <h4>Helpful resources</h4>
            <a
              href="https://www.bmcc.cuny.edu/ce/online-courses/"
              className="card-dash"
            >
              <p>Partnership Program</p>
            </a>
            <a
              href="https://bmcccuny.lightcastcc.com/browse-careers/11.3?region=New%20York&radius=100%20miles"
              className="card-dash"
            >
              <p>Learn more about CS areas</p>
            </a>
            <a
              href="https://www.bmcc.cuny.edu/students/lrc/"
              className="card-dash"
            >
              <p>Learning Resource</p>
            </a>
            <a
              href="https://www.bmcc.cuny.edu/student-affairs/career/career-express/"
              className="card-dash"
            >
              <p>Handshake</p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="ChatBot-button-wrap">
          
        <ChatBot />
        </div>
      </div>
      {isWindowOpen && selectedClub && (
        <Window
          onClose={closeWindow}
          content={
            <div>
              <h2>{selectedClub.name}</h2>
              <p>{selectedClub.description}</p>
            </div>
          }
        />
      )}
    </div>
  );
};

export default Dashboard;
