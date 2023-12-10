import StyledTile from "../elements/StyledTile";

type TileProps = {
  isCorrect: boolean;
  isHidden: boolean;
  number: number;
  onClick: (i: number) => void;
  size: number;
  tileId: number;
};

const Tile = ({
  isCorrect,
  isHidden,
  number,
  onClick,
  size,
  tileId,
}: TileProps) => {
  return (
    <StyledTile
      $isCorrect={isCorrect}
      $isHidden={isHidden}
      onClick={() => onClick(tileId)}
      size={size}
    >
      {number}
    </StyledTile>
  );
};

export default Tile;
