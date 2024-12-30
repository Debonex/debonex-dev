import { Checkbox, Field, Label } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { FC } from 'react';

export type CheckBoxProps = {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
  label?: string;
};

const CheckBox: FC<CheckBoxProps> = ({ enabled, setEnabled, label }) => {
  return (
    <Field>
      {label && <Label className="text-sm/6 font-bold">{label}</Label>}
      <Checkbox
        checked={enabled}
        onChange={setEnabled}
        className={clsx(
          'group size-6 cursor-pointer rounded-md p-1 ring-1 ring-inset',
          'bg-black/10 ring-black/15 data-[checked]:bg-black/50 dark:bg-white/10 dark:ring-white/15 dark:data-[checked]:bg-white',
          label && 'block mt-1.5',
        )}
      >
        <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block dark:fill-black" />
      </Checkbox>
    </Field>
  );
};

export default CheckBox;
