import Flag from '@site/src/assets/svg/flag.svg';
import Mine1 from '@site/src/assets/svg/mine1.svg';
import Mine2 from '@site/src/assets/svg/mine2.svg';
import Mine3 from '@site/src/assets/svg/mine3.svg';
import Mine4 from '@site/src/assets/svg/mine4.svg';
import Mine5 from '@site/src/assets/svg/mine5.svg';
import Mine6 from '@site/src/assets/svg/mine6.svg';
import Mine7 from '@site/src/assets/svg/mine7.svg';
import Mine8 from '@site/src/assets/svg/mine8.svg';
import Layout from '@theme/Layout';
import { FC, MouseEventHandler, useEffect, useState } from 'react';
import { Board, Game } from './minesweeper';

const mineCells = [
  <Mine1 className="h-[22px] w-[22px]" />,
  <Mine2 className="h-[22px] w-[22px]" />,
  <Mine3 className="h-[22px] w-[22px]" />,
  <Mine4 className="h-[22px] w-[22px]" />,
  <Mine5 className="h-[22px] w-[22px]" />,
  <Mine6 className="h-[22px] w-[22px]" />,
  <Mine7 className="h-[22px] w-[22px]" />,
  <Mine8 className="h-[22px] w-[22px]" />,
];

const CloseCell: FC<{
  flag: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}> = ({ flag, onClick }) => {
  return (
    <div
      className="h-6 w-6 border-[3px] border-solid border-b-[#232a32] border-l-[#6f7880] border-r-[#232a32] border-t-[#6f7880] bg-[#4d545c]"
      onClick={onClick}
    >
      {flag && <Flag className="h-[18px] w-[18px]" />}
    </div>
  );
};

const OpenCell: FC<{
  mine: number;
}> = ({ mine }) => {
  return (
    <div className="h-6 w-6 border-2 border-solid border-transparent border-l-[#1e262e] border-t-[#1e262e] bg-[#384048]">
      {mine > 0 && mineCells[mine - 1]}
    </div>
  );
};

const MineSweeper: FC = () => {
  const [board, setBoard] = useState<Board | null>(null);
  // global game
  const game = new Game(10, 10, 10, setBoard);

  useEffect(() => {
    game.startGame();
  }, []);

  return (
    <Layout>
      <div
        className="grid w-fit border-[5px] border-solid border-b-[#6f7880] border-l-[#232a32] border-r-[#6f7880] border-t-[#232a32] bg-[#1e262e]"
        style={{ gridTemplateColumns: 'repeat(10,min-content)' }}
      >
        {board &&
          board?.cells.map((row, i) =>
            row.map((cell, j) => {
              if (!cell.isRevealed) {
                return (
                  <CloseCell
                    flag={cell.isFlagged}
                    key={`${i}-${j}`}
                    onClick={() => {
                      console.log(i, j);
                      game.revealCell(i, j);
                    }}
                  />
                );
              } else if (cell.isMine) {
                return <OpenCell key={`${i}-${j}`} mine={cell.adjacentMines} />;
              } else {
                return <OpenCell key={`${i}-${j}`} mine={cell.adjacentMines} />;
              }
            }),
          )}
      </div>
    </Layout>
  );
};

export default MineSweeper;
