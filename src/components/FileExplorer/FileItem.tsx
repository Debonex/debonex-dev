import ChevronSvg from '@site/src/assets/svg/Chevron.svg';
import FileSvg from '@site/src/assets/svg/File.svg';
import clsx from 'clsx';
import React, { FC } from 'react';
import { File } from '.';

const FileItem: FC<{
  file: File;
  depth: number;
  onClick: Function;
  active: boolean;
}> = ({ file, depth, onClick, active }) => {
  const activeFile = active && file.type === 'file';
  return (
    <div
      style={{ paddingLeft: `${0.5 + 0.75 * depth}rem` }}
      onClick={() => {
        onClick(file);
      }}
      className={clsx(
        'cursor-pointer select-none border py-0.5 pr-4 font-mono text-sm transition-colors duration-75',
        'hover:bg-light-dim dark:hover:bg-[#282e34]',
        {
          'border-primary-main bg-light-dim text-primary-main dark:!bg-[#39414a]':
            activeFile,
          'border-transparent': !activeFile,
        },
      )}
    >
      {file.type === 'file' && (
        <FileSvg className="inline h-3.5 w-3.5 fill-current align-middle" />
      )}
      {file.type === 'directory' && (
        <ChevronSvg
          className={clsx(
            'inline h-3.5 w-3.5 fill-current align-middle transition-transform',
            { 'rotate-90': !active, 'rotate-180': active },
          )}
        />
      )}
      <span className="pl-1 align-middle">{file.fileName}</span>
    </div>
  );
};

export default FileItem;
