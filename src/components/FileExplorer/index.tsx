import clsx from 'clsx';
import { createContext, FC, useState } from 'react';
import FileContent from './FileContent';
import Sidebar from './Sidebar';
import ListSvg from '@site/src/assets/svg/List.svg';

export type File = {
  fileName: string;
  type: 'directory' | 'file';
  content?: string;
  children?: File[];
  expanded?: boolean;
};

type FileExplorerContext = {
  current: File | undefined;
  collapse: boolean;
  onSelect: (file: File) => void;
  setCollapse: (collapse: boolean) => void;
};

export const FileExplorerContext = createContext<FileExplorerContext>(null);

const FileExplorer: FC<{ files: File[]; init?: File; title?: string }> = ({
  files,
  init,
  title,
}) => {
  const [current, setCurrent] = useState<File>(init);
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <FileExplorerContext.Provider
      value={{ current, onSelect: setCurrent, collapse, setCollapse }}
    >
      <div
        className={clsx(
          'grid grid-cols-1 rounded-md bg-[#f6f8fa]',
          'md:grid-cols-[auto,minmax(0,1fr)]',
          'dark:bg-dark-deep'
        )}
      >
        <div className="md:col-span-2 p-1 px-2 bg-[var(--ifm-background-surface-color)] relative">
          <ListSvg
            onClick={() => setCollapse(!collapse)}
            className="inline h-5 w-5 fill-current align-middle cursor-pointer hover:opacity-60 transition-opacity"
          />
          {/* align title at the center of parent*/}
          <span className="absolute left-1/2 transform -translate-x-1/2">
            {title}
          </span>
        </div>
        {collapse ? null : <Sidebar files={files} />}
        <FileContent file={current} />
      </div>
    </FileExplorerContext.Provider>
  );
};

export default FileExplorer;
