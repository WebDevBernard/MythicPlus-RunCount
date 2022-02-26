const style = {
  display: "flex",
  alignContent: "center",
  marginLeft: "32px",
  marginTop: "16px",
  color: "#d2d1d6",
};

export default function Error({ error }) {
  return (
    <div style={style}>
      <p> An error occured {error} </p>
    </div>
  );
}