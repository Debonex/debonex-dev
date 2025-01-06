import { FC } from 'react';
import clsx from 'clsx';

const Forward: FC<{
  idx: number;
  highlight?: boolean;
}> = ({ idx, highlight }) => {
  return (
    <div
      className={clsx(
        'flex h-5 w-5 items-center justify-center bg-blue-500 text-xs dark:bg-blue-600',
        highlight && 'outline outline-red-500',
      )}
    >
      {idx}
    </div>
  );
};

const Backward: FC<{
  idx: number;
  highlight?: boolean;
}> = ({ idx, highlight }) => {
  return (
    <div
      className={clsx(
        'flex h-5 w-[41px] items-center justify-center border bg-green-500 text-xs dark:bg-green-600',
        highlight && 'outline outline-red-500',
      )}
    >
      {idx}
    </div>
  );
};

const Idle: FC = () => {
  return <div className="h-5 w-5 bg-slate-400 dark:bg-slate-500"></div>;
};

export { Forward, Backward, Idle };
