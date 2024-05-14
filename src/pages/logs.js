import React, { useState, useEffect } from "react";
import axios from "axios";

const Logs = () => {
  const [userLogs, setUserLogs] = useState({});
  const [searchDate, setSearchDate] = useState("");
  const [filteredLoginTimes, setFilteredLoginTimes] = useState([]);
  const [filteredLogoutTimes, setFilteredLogoutTimes] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userID = user.id;

    const fetchUserLogs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/user/${userID}`
        );
        setUserLogs(response.data);
        setFilteredLoginTimes(response.data.loginTimes);
        setFilteredLogoutTimes(response.data.logoutTimes);
      } catch (error) {
        console.error("Error fetching user logs:", error);
      }
    };

    fetchUserLogs();
  }, []);

  const formatDateTime = (dateTimeString) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    // Split the date string by "+" and "%3A"
    const parts = dateTimeString.split(/[\+|%3A]+/);
  
    if (parts.length >= 7) {
      const month = monthNames.indexOf(parts[1]);
      const day = parseInt(parts[2]);
      const year = parseInt(parts[3]);
      const hour = parseInt(parts[4]);
      const minute = parseInt(parts[5]);
      const second = parseInt(parts[6]);
      
      if (!isNaN(month) && !isNaN(day) && !isNaN(year) && !isNaN(hour) && !isNaN(minute) && !isNaN(second)) {
        const formattedDateTime = new Date(year, month, day, hour, minute, second).toLocaleString();
        return formattedDateTime;
      }
    }
    
    return "Invalid Date";
  };

  const handleSearch = () => {
    const loginTimes = userLogs.loginTimes.filter(time =>
      formatDateTime(time).includes(searchDate)
    );
    const logoutTimes = userLogs.logoutTimes.filter(time =>
      formatDateTime(time).includes(searchDate)
    );
    setFilteredLoginTimes(loginTimes);
    setFilteredLogoutTimes(logoutTimes);
  };

  return (
    <main>
      <body>
    <div>
      <h1 style={{ marginBottom: "50px" }}>User Logs</h1>
      <div>
        <input
          type="text"
          placeholder="Search by date or time (e.g., 'YYYY-MM-DD')"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          style={{ width: "350px" }} // Adjust width of the search bar
        />
        <button onClick={handleSearch} style={{ padding: "5px 10px", marginLeft: "5px", width: "150px", marginBottom: "50px" }}>Search</button> {/* Adjust button padding and margin */}
      </div>
      <div>
        <h4>Login Times</h4>
        <ul>
          {filteredLoginTimes.map((time, index) => (
            <li key={index}>{formatDateTime(time)}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Logout Times</h4>
        <ul>
          {filteredLogoutTimes.map((time, index) => (
            <li key={index}>{formatDateTime(time)}</li>
          ))}
        </ul>
      </div>
    </div>
    </body>
      <footer className="site-footer">
        <div className="footer-content">
          <p>&copy; 2024 ISD Vantablack</p>
          <ul className="footer-links">
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="/adminPage">Admin Login</a></li>
          </ul>
        </div>
      </footer>
    </main>
  );
};

export default Logs;
