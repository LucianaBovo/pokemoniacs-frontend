import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const ChatSearchUsers = ({ onUserSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [searchUserValidated, setSearchUserValidated] = useState(false);
  const [selectUserValidated, setSelectUserValidated] = useState(false);
  const [users, setUsers] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  async function searchUsers(e) {
    e.preventDefault();

    setSearchUserValidated(true);

    const accessToken = await getAccessTokenSilently();
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_SERVER_URL}/auth0/users`,
      {
        params: {
          searchTerm,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    setUsers(data);
    setSelectedUser(data[0]?.userId);
  }

  function enterDirectMessageRoom(e) {
    e.preventDefault();

    setSelectUserValidated(true);

    if (!selectedUser) {
      return;
    }

    onUserSelect(users.find((u) => u.userId === selectedUser));
    setUsers([]);
    setSelectedUser("");
    setSearchUserValidated(false);
    setSelectUserValidated(false);
  }

  return (
    <div className="container">
      <div className="row">
        <form
          className={searchUserValidated ? "was-validated" : ""}
          onSubmit={(e) => searchUsers(e)}
        >
          <div className="col-12 mb-2">
            <label htmlFor="searchUsers" className="form-label fw-bold">
              Search Users:
            </label>
            <input
              type="text"
              className="form-control"
              id="searchUsers"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for user"
              minLength="2"
              required
            />
            <div className="errorMessage invalid-feedback">
              Search users should be atleast 2 characters
            </div>
          </div>
          <div className="text-center">
            <button id="sendDm" className="btn btn-primary" type="submit">
              Search users
            </button>
          </div>
        </form>
        <form
          onSubmit={(e) => enterDirectMessageRoom(e)}
          className={searchUserValidated ? "was-validated" : ""}
        >
          <div className="col-12 mb-2">
            <label htmlFor="selectUser" className="form-label fw-bold">
              Select User:
            </label>
            <select
              disabled={users.length === 0}
              className="form-select"
              id="selectUser"
              required
              value={selectedUser}
              onSelect={(e) => {
                console.log(e.target.value);
              }}
            >
              {users.map((user) => {
                return (
                  <option key={user.userId} value={user.userId}>
                    {user.name}
                  </option>
                );
              })}
            </select>
            <div className="errorMessage invalid-feedback">Select a user</div>
          </div>
          <div className="text-center">
            <button
              id="sendDm"
              disabled={selectedUser === null}
              className="btn btn-primary"
              type="submit"
            >
              Send direct message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatSearchUsers;
