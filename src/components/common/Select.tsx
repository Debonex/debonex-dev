import { Field, Select as HeadlessSelect, Label } from '@headlessui/react';
import { FC, SelectHTMLAttributes } from 'react';
import clsx from 'clsx';

export type SelectProps = {
  label?: string;
  value?: SelectHTMLAttributes<HTMLSelectElement>['value'];
  onChange?: SelectHTMLAttributes<HTMLSelectElement>['onChange'];
  options: Array<{ value: string; label: string }>;
};

const Select: FC<SelectProps> = (props) => {
  return (
    <Field>
      {props.label && (
        <Label className="text-sm/6 font-bold">{props.label}</Label>
      )}
      <HeadlessSelect
        className={clsx(
          'block w-full appearance-none rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 dark:bg-white/5',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25 dark:data-[focus]:outline-white/25',
          '*:text-black',
          props.label && 'mt-1.5',
        )}
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </HeadlessSelect>
    </Field>
  );
};

export default Select;
