export default function Dice(props) {
  return (
    <button
      className="each-die"
      style={{ backgroundColor: props.isHeld ? "#59E391" : "white" }}
      onClick={props.hold}
    >
      {props.value}
    </button>
  );
}
