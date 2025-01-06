import clsx from 'clsx';
import { FC } from 'react';
import {
  schedule_gpipe,
  schedule_with_interleaving,
  schedule_without_interleaving,
} from './schedule';

export type PPScheduleProps = {
  mode: 'interleaved' | 'without_interleaved' | 'gpipe';
  pp: number;
  vpp?: number;
  microBatch: number;
  overlapP2PComm: boolean;
  highlight?: boolean | ((key: string) => boolean);
  className?: string;
};

const PPSchedule: FC<PPScheduleProps> = ({
  mode,
  pp,
  vpp,
  microBatch,
  overlapP2PComm,
  highlight,
  className,
}) => {
  // pp should be greater than 1 and should be integer
  if (pp < 2 || !Number.isInteger(pp)) {
    return <div>Invalid pp</div>;
  }

  let schedules = [];
  try {
    if (mode == 'interleaved') {
      schedules = schedule_with_interleaving(
        pp,
        vpp,
        microBatch,
        overlapP2PComm,
      );
    } else if (mode == 'without_interleaved') {
      schedules = schedule_without_interleaving(pp, microBatch, highlight);
    } else if (mode == 'gpipe') {
      schedules = schedule_gpipe(pp, microBatch);
    }
  } catch (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className={clsx('w-full overflow-auto', className)}>
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
