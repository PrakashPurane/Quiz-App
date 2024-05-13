import React, { useState } from "react";
import "./Mode.css";

const ToggleMenu = ({ toggleDarkMode, isDarkMode }) => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
    toggleDarkMode(); // Call the toggleDarkMode function from props
  };

  return (
   <div className={`toggle-menu ${toggled ? "toggled" : ""} ${isDarkMode ? 'darkmode' : ''} `}>
      <button className="toggle-btn" onClick={handleToggle}>
      
        <img
          className="sun-light"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhBJREFUSEvFVTFoFUEQfePNXAorEQVBMIjprcUmsTClhWCvmEIiYoJRTERFxQRFUxgbtbcT0iVgfmVtLdipAUXFyg/OXMbbsB+Oy7/1fkhwu92dnTdv5s0sYZcX7bJ/tAZwdzKzjRCQiLR+19pwRwFU9RYzPyeiH9UUqqoD2BCRrHru7gfN7LyIzNdTvoWBqs4CuA/gAzOPEdF6qk7ufrgoio67HwNwQ0QWqvZbANz9SFEUa+5+FMC0iDxJAajqDIAFIvqYZVkI6FMSIFxGyhdF5EHYm9lZd78EYDQ+fktES8z8JuxV9SYzvySib/9MUd1AVR8HJg0s7pSKuptimFSRmZ1z99fRwb1Q+Mhosgw81Cqs0yKy2gSSBFDV9wCOu/tUnudPa4rqiWFFRMaTAFWNVxuplGsBYA8z7yOiXzVpHjKzoLCfIrK/yccmgwTAn9C4DQBB+18B/BaRvUmAJnqq+g7AidLJTOnkUUOKOiIytq0amNkZd9+UIoBQ5GcAhszsMoBr8XxcRFa2BRA1npLpXK9XBgKIjXZBRB5WGu0KgJPR0TIRvWLm5RjELDO/aNVo3W53OMuyDhENu/vVPM8XU42kqtcBzMdRMUpEn6v2/YbdXMh3HHaniOhLCiAMOzNbAzDSathFyreZeYmIvteU0zSuD5Q9MdGvHv/nw+mXkh390VI5H/SudYoGddyz/wv9Qhcocxf2OQAAAABJRU5ErkJggg=="
        />
        <div className="thumb"></div>
        <img
          className="moon-light"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAArFJREFUSEu1lTloVUEUhv9z75yxslBRI4oRUbFQCIqCgkspCMYyAcENUxhF1EpBDGls3MBCUHFBxKXSYCPYaEgVMbgUiWAjghEEA6K83DmP3ztwX3jRmzxjyGnuMjP/N3PmnzOCGQ6ZYX1MCiDZZGYdADpImvd+2VQnNCEgy7KjInIegC9Eh1V10bQBJNXMHgHYXYj1A9gAoFdVt04bYGY3Se4H8EtEDpD8BuA5gGequmNaADPbRfIJgCqAbaraF0KIs34B4LWqrp8WIITwFsBaAN2qejaKkVxoZsMAKs65BSLyYyqQsU0eHR1dkyTJOwA/nXNLRGSkJhRCGADQElOXO+n2fwFCCCcAXCD5wHvfXi+SZdkREbkC4L1zboOIVP4VMrYCM7tG8hDJw977q/UCJGeZ2UcAi0ne8d7vmzIghPAYQKuItDrnev4UCCFsAvASgBORa2madoqINQKNrSDLstsisldE2pxzD8sGmlk7yVsAZgEYFJHTaZr2iEh0XWmMAUII3bk9z+TGOauq8b00KpXKijRN7wHYWHSIZnhTvCeFGUa890vjv3rAZgB9APpVtTa4FEIyNbNTeWMXgLSk05Cqrh4HIClmNghgFYAdqvqsUX5JOgDzsyyblyTJXAA3AKwkedx7f3kcIH7kgDaS9wF8cc5tFJHPjSC19jorZ865hbVz9Fc1DSE8zdO0E8AQyXbvfTxkE0ZceQjhmIhcyCtAQrLDe3+9NuAvAMk51Wr1FcnlRU3qcs6dK3NK7qhmM7sLYEsheFFVT9bPpvQ+IDm7Wq1eInmwzim9seiJyAeS0RDbCydF53wXkU7nXEzvuJj0RgshxPIcfd80SZaeO+f2iMjXsj4N7+TolPyUtwBYlyRJLHjN+YkfEJH+NE3j89Nke9QQ8K8umqjfjAN+A5jCHChyWotxAAAAAElFTkSuQmCC"
        />
      </button>
      
    </div>
  );
};

export default ToggleMenu;
