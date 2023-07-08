import clsx from 'clsx';
import React, { FC, useContext, useState } from 'react';
import { File, FileExplorerContext } from '.';
import FileItem from './FileItem';

const Sidebar: FC<{
  files: File[];
  className?: string;
}> = ({ files }) => {
  return (
    <div className="py-2">
      {files.map((file, idx) => (
        <SidebarItem depth={0} file={file} key={idx} />
      ))}
    </div>
  );
};

const SidebarItem: FC<{
  file: File;
  depth: number;
}> = ({ file, depth }) => {
  const { onSelect, current } = useContext(FileExplorerContext);
  const [expanded, setExpanded] = useState(file.expanded);

  if (file.type === 'directory') {
    return (
      <>
        <FileItem
          file={file}
          depth={depth}
          onClick={() => {
            setExpanded(!expanded);
          }}
          active={expanded}
        />
        <div
          className={clsx('origin-top transition-all', {
            'max-h-0 scale-y-0': !expanded,
            'max-h-[100vh]': expanded,
          })}
        >
          {file.children &&
            file.children.map((item, idx) => (
              <SidebarItem depth={depth + 1} file={item} key={idx} />
            ))}
        </div>
      </>
    );
  } else {
    return (
      <FileItem
        depth={depth}
        file={file}
        onClick={onSelect}
        active={current === file}
      />
    );
  }
};

export default Sidebar;
