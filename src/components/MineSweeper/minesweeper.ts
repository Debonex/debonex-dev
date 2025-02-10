class Cell {
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  adjacentMines: number;

  constructor(isMine: boolean = false, adjacentMines: number = 0) {
    this.isMine = isMine;
    this.isRevealed = false;
    this.isFlagged = false;
    this.adjacentMines = adjacentMines;
  }

  reveal() {
    this.isRevealed = true;
  }

  flag() {
    this.isFlagged = true;
  }

  unflag() {
    this.isFlagged = false;
  }

  setAdjacentMines(count: number) {
    this.adjacentMines = count;
  }
}

class Board {
  rows: number;
  cols: number;
  mines: number;
  cells: Cell[][];

  constructor(rows: number, cols: number, mines: number) {
    this.rows = rows;
    this.cols = cols;
    this.mines = mines;
  }

  init() {
    // create board
    this.cells = Array.from({ length: this.rows }).map(() =>
      Array.from({ length: this.cols }).map(() => new Cell()),
    );
    // place mines
    let minesPlaced = 0;
    while (minesPlaced < this.mines) {
      const row = Math.floor(Math.random() * this.rows);
      const col = Math.floor(Math.random() * this.cols);
      if (!this.cells[row][col].isMine) {
        this.cells[row][col].isMine = true;
        minesPlaced++;
      }
    }
    // calculate adjacent mines
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (!this.cells[row][col].isMine) {
          let count = 0;
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              if (
                row + i >= 0 &&
                row + i < this.rows &&
                col + j >= 0 &&
                col + j < this.cols
              ) {
                if (this.cells[row + i][col + j].isMine) {
                  count++;
                }
              }
            }
          }
          this.cells[row][col].setAdjacentMines(count);
        }
      }
    }
  }

  revealCell(row, col) {
    console.log(this.cells);
    
    if (this.cells[row][col].isMine) {
      // game over
      console.log('Game Over');
    } else {
      this.reveal(row, col);
    }
  }

  reveal(row, col) {
    if (
      row < 0 ||
      row >= this.rows ||
      col < 0 ||
      col >= this.cols ||
      this.cells[row][col].isRevealed
    ) {
      return;
    }
    this.cells[row][col].reveal();
    if (this.cells[row][col].adjacentMines === 0) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          this.reveal(row + i, col + j);
        }
      }
    }
  }

  flagCell(row, col) {
    this.cells[row][col].flag();
  }

  unflagCell(row, col) {
    this.cells[row][col].unflag();
  }
}

class Game {
  board: Board;
  updateBoard: Function;

  constructor(
    rows: number,
    cols: number,
    mines: number,
    updateBoard: (board: Board) => void,
  ) {
    this.board = new Board(rows, cols, mines);
    this.updateBoard = updateBoard;
  }
  startGame() {
    this.board.init();
    this.updateBoard(this.board);
  }
  revealCell(row, col) {
    this.board.revealCell(row, col);
    this.updateBoard(this.board);
  }
  flagCell(row, col) {
    this.board.flagCell(row, col);
    this.updateBoard(this.board);
  }
  unflagCell(row, col) {
    this.board.unflagCell(row, col);
    this.updateBoard(this.board);
  }
}

export { Cell, Board, Game };
