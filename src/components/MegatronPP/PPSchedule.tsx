import { FC } from 'react';
import {
  schedule_without_interleaving,
  schedule_with_interleaving,
} from './schedule';

export type PPScheduleProps = {
  mode: 'interleaved' | 'without_interleaved';
  pp: number;
  vpp?: number;
  microBatch: number;
  overlapP2PComm: boolean;
};

const PPSchedule: FC<PPScheduleProps> = ({
  mode,
  pp,
  vpp,
  microBatch,
  overlapP2PComm,
}) => {
  // pp should be greater than 1 and should be integer
  if (pp < 2 || !Number.isInteger(pp)) {
    return <div>Invalid pp</div>;
  }

  let schedules = [];
  try {
    if (mode == 'interleaved') {
      schedules = schedule_with_interleaving(pp, vpp, microBatch);
    } else if (mode == 'without_interleaved') {
      schedules = schedule_without_interleaving(pp, microBatch, overlapP2PComm);
    }
  } catch (error) {
    return <div>{error.message}</div>;
  }

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
