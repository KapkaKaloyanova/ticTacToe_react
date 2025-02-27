import Square from "./Square";

export default function BoardRow() {
  return (
    <>
      <div className="board-row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
    </>
  );
}
