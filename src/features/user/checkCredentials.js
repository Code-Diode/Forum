import { users } from "../../data/users";

function checkCredentials(user1) {
  const foundUser = users.find((user) => {
    return user.username === user1.email && user.password === user1.password;
  });

  if (foundUser) {
    return true;
  } else {
    return false;
  }
}

export default checkCredentials;
