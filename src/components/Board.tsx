import { useEffect, useState } from "react";
import Tile from "./Tile";
import {
  generateArray,
  generateBoard,
  getBoardSize,
  isSolved,
  moveTile,
} from "../helpers/helpers";
import useScreenSize from "../hooks/useSreenSize";
import Button from "../elements/StyledButton";
import Text from "../elements/StyledText";
import StyledBoard from "../elements/StyledBoard";

type BoardProps = {
  cols: number;
  rows: number;
};

const Board = ({ cols, rows }: BoardProps) => {
  const [tiles, setTiles] = useState<number[]>(generateArray(cols, rows));
  const [solved, setSolved] = useState(false);

  const screenSize = useScreenSize();
  const tileSize = Math.min((screenSize.width * 0.8) / cols, 100);

  const onTileClick = (id: number) => {
    const movedTiles = moveTile(id, cols, tiles);
    isSolved(movedTiles) && setSolved(true);
    setTiles(movedTiles);
  };

  const shuffleTiles = () => {
    setTiles(generateBoard(cols, rows));
  };

  useEffect(() => {
    setTiles(generateBoard(cols, rows));
  }, [cols, rows]);

  return (
    <>
      <StyledBoard cols={cols}>
        {tiles &&
          tiles.map((tile, i) => {
            return (
              <Tile
                isCorrect={tile === i + 1}
                isHidden={tile === getBoardSize(cols, rows)}
                key={i}
                number={tile}
                onClick={onTileClick}
                size={tileSize}
                tileId={i}
              />
            );
          })}
      </StyledBoard>
      <Button onClick={() => shuffleTiles()}>Shuffle</Button>
      {solved && (
        <Text>
          You solved the puzzle! Shuffle the board or enter new values to
          generate new n x m puzzle!
        </Text>
      )}
    </>
  );
};

export default Board;
