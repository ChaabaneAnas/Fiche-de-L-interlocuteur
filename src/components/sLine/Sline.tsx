interface propTypes {
  height: string;
  width: string;
  color: string;
  position: string;
}

function Sline({ height, width, color, position }: propTypes) {
  return (
    <div
      style={{ height, width, background: color, alignSelf: position }}
    ></div>
  );
}

export default Sline;
