interface Props {
  email: string;
  gender: string;
  name: { first: string; last: string };
  cell: string;
  location: { country: string };
  dob: { age: string };
}

const Infos = ({
  email,
  gender,
  name: { first, last },
  cell,
  location: { country },
  dob: { age },
}: Props) => {
  return (
    <div>
      <h2 className="text-xl">
        Name : {first} {last}
      </h2>
      <p className="text-xl">Email : {email}</p>
      <p className="text-xl">Phone : {cell}</p>
      <p className="text-xl">Location : {country}</p>
      <p className="text-xl">Age : {age}</p>
      <p className="text-xl">Gender : {gender}</p>
    </div>
  );
};

export default Infos;
