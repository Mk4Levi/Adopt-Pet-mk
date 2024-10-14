import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProfileModal from "../components/ProfileModal";
import "../css/profile.css";

const Profile = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isSaved] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <div className="profile-container">
          <h2>Profile</h2>
          <form className="profile-form" onSubmit={handleFormSubmit}>
            <div className="input-container">
              <input
                type="text"
                id="inputname"
                // value={auth.user.details.name}
              />
              <label htmlFor="inputname" className="label focused">
                Name
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="email"
                id="inputemail"
                // value={auth.user.details.email}
              />
              <label htmlFor="inputemail" className={"label focused"}>
                Email
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="text"
                id="inputref"
                // value={auth.user.details.referralCode}
              />
              <label htmlFor="inputref" className={"label focused"}>
                Referral Code
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="text"
                id="input"
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                // defaultValue={auth.user.details.address}
              />
              <label
                htmlFor="input"
                className={isInputFocused ? "label focused" : "label"}
              >
                Postal Address
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="number"
                id="input"
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                // defaultValue={auth.user.details.pinCode}
              />
              <label
                htmlFor="input"
                className={isInputFocused ? "label focused" : "label"}
              >
                Pincode
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="Text"
                id="input"
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                // defaultValue={auth.user.details.college}
              />
              <label
                htmlFor="input"
                className={isInputFocused ? "label focused" : "label"}
              >
                College
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="text"
                id="input"
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                // defaultValue={auth.user.details.collegeCity}
              />
              <label
                htmlFor="input"
                className={isInputFocused ? "label focused" : "label"}
              >
                City of College
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="text"
                id="input"
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                // defaultValue={auth.user.details.studyYear}
              />
              <label
                htmlFor="input"
                className={isInputFocused ? "label focused" : "label"}
              >
                year of study
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="number"
                id="input"
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                // defaultValue={auth.user.details.whatsapp}
              />
              <label
                htmlFor="input"
                className={isInputFocused ? "label focused" : "label"}
              >
                Whatsapp Number
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="date"
                id="input"
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                // defaultValue={auth.user.details.dob}
              />
              <label
                htmlFor="input"
                className={isInputFocused ? "label focused" : "label"}
              >
                DOB
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="link"
                id="input"
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                // defaultValue={auth.user.details.fb}
              />
              <label
                htmlFor="input"
                className={isInputFocused ? "label focused" : "label"}
              >
                Facebook link
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="link"
                id="input"
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                // defaultValue={auth.user.details.insta}
              />
              <label
                htmlFor="input"
                className={isInputFocused ? "label focused" : "label"}
              >
                Instagram link
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="link"
                id="input"
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                // defaultValue={auth.user.details.twitter}
              />
              <label
                htmlFor="input"
                className={isInputFocused ? "label focused" : "label"}
              >
                Twitter link
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container otp-container">
              <input
                type="number"
                id="input"
                required
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                // defaultValue={auth.user.details.phone}
              />
              <label
                htmlFor="input"
                className={isInputFocused ? "label focused" : "label"}
              >
                Phone Number
              </label>
              <div className="underline"></div>
            </div>
            <div>
              <ProfileModal />
            </div>
            <button>Send email</button>
            <br></br>
            <button className={isSaved ? "edit-btn" : "save-btn"}>
              {isSaved ? "Edit" : "Save"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

/* 



*/
