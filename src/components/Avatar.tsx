interface ImageProps {
  picture: { large: string };
}

const Avatar = ({ picture: { large } }: ImageProps) => {
  return (
    <div className="avatar">
      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={large} />
      </div>
    </div>
  );
};

export default Avatar;
