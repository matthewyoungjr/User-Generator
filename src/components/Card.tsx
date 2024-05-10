import Avatar from "./Avatar";
import Infos from "./Infos";
import Button from "./Button";
import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  email: string;
  gender: string;
  name: { first: string; last: string };
  picture: { large: "" };
  cell: string;
  location: { country: string };
  dob: { age: string };
};

const Card = () => {
  const [user, setUser] = useState<User>({
    email: "",
    gender: "",
    name: { first: "", last: "" },
    picture: { large: "" },
    cell: "",
    location: { country: "" },
    dob: { age: "" },
  });
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => console.log(err.message));
  }, []);

  console.log(user.email);
  return (
    <>
      <div>
        <Avatar picture={user.picture} />
      </div>

      <div className="mt-3">
        <Infos
          email={user.email}
          gender={user.gender.toUpperCase()}
          name={user.name}
          cell={user.cell}
          location={user.location}
          dob={user.dob}
        />
      </div>

      <div className="mt-5">
        <Button />
      </div>
    </>
  );
};

export default Card;
