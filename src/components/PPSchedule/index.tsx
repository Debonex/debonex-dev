import { FC } from 'react';

export type Step = {};

const Forward: FC<{ idx: number }> = ({ idx }) => {
  return (
    <div className="flex h-5 w-5 items-center justify-center bg-blue-600 text-xs text-white outline outline-slate-900">
      {idx}
    </div>
  );
};

const Backward: FC<{ idx: number }> = ({ idx }) => {
  return (
    <div className="flex h-5 w-9 items-center justify-center border bg-green-600 text-xs outline outline-slate-900">
      {idx}
    </div>
  );
};

const Dummy: FC = () => {
  return <div className="h-5 w-5 bg-slate-500 outline outline-slate-900"></div>;
};

type PPScheduleProps = {
  mode: 'interleaved' | 'without_interleaved';
  pp: number;
  vpp?: number;
  micro_batch: number;
};

const PPSchedule: FC<PPScheduleProps> = () => {
  return (
    <div>
      <div className="flex">
        <Forward idx={1} />
        <Backward idx={1} />
        <Dummy />
        <Dummy />
        <Dummy />
      </div>
    </div>
  );
};

export default PPSchedule;

export { Forward, Backward, Dummy };
