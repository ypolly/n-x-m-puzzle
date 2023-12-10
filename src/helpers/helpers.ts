export const getBoardSize = (cols:number, rows:number) => cols * rows;

export const generateArray = (cols:number, rows:number) => (
    [...Array(getBoardSize(cols, rows)).keys()].map(i => i + 1)
);

const countInversions = (arr: number[]) => {
  let inversions = 0;

  inversions = arr.reduce((count, currentTile, currentIndex) => {
    return count + arr.slice(currentIndex + 1).filter(tile => tile && tile < currentTile).length;
  }, 0);

  return inversions;
};

//TODO: set up isSolvable correctly - doesn't work right for 4 x 4
const isSolvable = (cols:number, rows:number, arr: number[]) => {
  const inversions = countInversions(arr);
  const blankIndex = arr.findIndex(e => e === arr.length);
  const blankRowNumber = Math.floor(blankIndex / cols) + 1;

  if (cols % 2 === 1) {
    return inversions % 2 === 0;
  }
  if (cols === rows) {
    return (inversions % 2 === 1 && (rows - blankRowNumber ) % 2 === 1) || (inversions % 2 === 0 && (rows - blankRowNumber) % 2 === 0)
  }
  if (cols % 2 === 0 && rows % 2 === 0) {
    return (inversions + blankRowNumber) % 2 === 0;
  }
    return (inversions + blankRowNumber) % 2 === 1;
};

const shuffle = (arr: number[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[rand]] = [arr[rand], arr[i]];
  }
  return arr;
};

export const generateBoard = (cols:number, rows:number) : number[] => {
  const arr = shuffle(generateArray(cols, rows));
   if (isSolvable(cols, rows, arr)) {
      return arr;
    }
      return generateBoard(cols, rows);
};

export const isSolved = (arr: number[]) => arr.every((e,i) => e === i + 1);

const isMovable = (index: number, blankIndex: number, cols: number) => {
    const col = index % cols;
    const row = Math.floor(index / cols);
    const blankCol = blankIndex % cols;
    const blankRow = Math.floor(blankIndex / cols);

    return (
      (Math.abs(row - blankRow) === 1 && col === blankCol) ||
      (Math.abs(col - blankCol) === 1 && row === blankRow)
    );
  };

export const moveTile = (index: number, cols: number,  arr: number[]) => {
    const newArr = [...arr];
    const blankIndex = newArr.findIndex(e => e === arr.length);

    if (isMovable(index, blankIndex, cols)) {
      [newArr[index], newArr[blankIndex]] = [newArr[blankIndex], newArr[index]];
      return newArr;
    } 
      return newArr;
  };
