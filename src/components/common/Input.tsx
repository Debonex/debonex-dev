import { Field, Input as HeadlessInput, Label } from '@headlessui/react';
import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';

export type InputProps = {
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  label?: string;
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  className?: string;
};

const Input: FC<InputProps> = (props) => {
  return (
    <Field>
      {props.label && (
        <Label className="text-sm/6 font-bold">{props.label}</Label>
      )}
      <HeadlessInput
        type={props.type}
        className={clsx(
          'block w-full rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 dark:bg-white/5',
          'focus:outline-none data-[focus]:outline-1 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25 dark:data-[focus]:outline-white/25',
          props.label && 'mt-1.5',
          props.className,
        )}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </Field>
  );
};

export default Input;
