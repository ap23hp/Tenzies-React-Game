export default function Dice(props) {
  return (
    <button
    className={
  `each-die 
   ${props.isHeld ? "held" : ""} 
   ${!props.isHeld && props.animate ? "animate-roll" : ""}`
}
      style={{ backgroundColor: props.isHeld ? "#59E391" : "white" }}
      onClick={props.hold}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
    >
      {props.value}
    </button>
  );
}
