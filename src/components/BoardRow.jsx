import Square from "./Square";

export default function BoardRow() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
