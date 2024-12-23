import { FC } from 'react';
import { schedule_without_interleaved } from './schedule';

export type PPScheduleProps = {
  mode: 'interleaved' | 'without_interleaved';
  pp: number;
  vpp?: number;
  microBatch: number;
};

const PPSchedule: FC<PPScheduleProps> = ({
  mode,
  pp,
  vpp,
  microBatch: microBatch,
}) => {
  // pp should be greater than 1 and should be integer
  if (pp < 2 || !Number.isInteger(pp)) {
    return <div>Invalid pp</div>;
  }

  const schedules =
    mode === 'without_interleaved'
      ? schedule_without_interleaved(pp, microBatch)
      : [];

  return (
    <div className="w-full overflow-auto">
      <div className="flex w-fit flex-col gap-px bg-black p-px">
        {schedules.map((schedule, idx) => (
          <div key={idx} className="flex gap-px">
            {schedule}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PPSchedule;
