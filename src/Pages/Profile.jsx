import "../styles/profile.css";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="profile-container">
      <div className="profile-card">

        <div className="profile-header">
          <div className="profile-avatar">
            {user?.username?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <div>
            <h1>My Profile</h1>
            <p>Manage your account information</p>
          </div>
        </div>

        <div className="profile-form">

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={user.username}
              onChange={(e) =>
                setUser({
                  ...user,
                  username: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
            />
          </div>

          <button className="save-btn">
            Save Changes
          </button>

        </div>
      </div>
    </div>
  );
};

export default Profile;