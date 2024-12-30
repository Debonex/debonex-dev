import Input from '@site/src/components/common/Input';
import Select from '@site/src/components/common/Select';
import { FC, useState } from 'react';
import PPSchedule, { PPScheduleProps } from './PPSchedule';
import CheckBox from '../common/CheckBox';

const ScheduleController: FC = () => {
  const [pp, setPP] = useState(4);
  const onPPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPP(parseInt(e.target.value));
  };
  const [microBatch, setMicroBatch] = useState(4);
  const onMicroBatchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMicroBatch(parseInt(e.target.value));
  };
  const [mode, setMode] = useState<PPScheduleProps['mode']>(
    'without_interleaved',
  );
  const onModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(e.target.value as PPScheduleProps['mode']);
  };
  const modeOptions = [
    { value: 'without_interleaved', label: 'Without Interleaved(PP)' },
    { value: 'with_interleaved', label: 'With Interleaved(VPP)' },
  ];
  const [overlapP2PComm, setOverlapP2PComm] = useState(false);

  const bubbleRatio = (pp - 1) / microBatch;

  return (
    <div>
      <div className="mb-4 flex gap-4">
        <Select
          label="mode"
          value={mode}
          onChange={onModeChange}
          options={modeOptions}
        />
        <Input type="number" label="PP" value={pp} onChange={onPPChange} />
        <Input
          type="number"
          label="Micro Batch"
          value={microBatch}
          onChange={onMicroBatchChange}
        />
        <CheckBox
          enabled={overlapP2PComm}
          setEnabled={setOverlapP2PComm}
          label="p2p_overlap_comm"
        />
      </div>
      <PPSchedule
        mode={mode}
        pp={pp}
        microBatch={microBatch}
        overlapP2PComm={overlapP2PComm}
      />

      <div className="mt-2">
        Bubble比例: <span className="text-sm">{bubbleRatio}</span>
      </div>
    </div>
  );
};

export default ScheduleController;
