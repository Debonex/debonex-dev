import clsx from 'clsx';
import React, { createContext, FC, useState } from 'react';
import FileContent from './FileContent';
import Sidebar from './Sidebar';

export type File = {
  fileName: string;
  type: 'directory' | 'file';
  content?: string;
  children?: File[];
  expanded?: boolean;
};

type FileExplorerContext = {
  current: File | undefined;
  onSelect: (file: File) => void;
};

export const FileExplorerContext = createContext<FileExplorerContext>(null);

const FileExplorer: FC<{ files: File[]; init?: File }> = ({ files, init }) => {
  const [current, setCurrent] = useState<File>(init);

  return (
    <FileExplorerContext.Provider value={{ current, onSelect: setCurrent }}>
      <div
        className={clsx(
          'grid grid-cols-1 rounded-md bg-[#f6f8fa]',
          'md:grid-cols-[auto,minmax(0,1fr)]',
          'dark:bg-dark-deep'
        )}
      >
        <Sidebar files={files} />
        <FileContent file={current} />
      </div>
    </FileExplorerContext.Provider>
  );
};

export default FileExplorer;
