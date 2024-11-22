import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import { FC, useContext } from 'react';
import { File, FileExplorerContext } from '.';

const mapLang = (extension: string) => {
  switch (extension) {
    case 'rs':
      return 'rust';
    default:
      return extension;
  }
};

const FileContent: FC<{ file?: File }> = ({ file }) => {
  const extension = file.fileName.split('.').pop();
  const lang = mapLang(extension);

  const { collapse } = useContext(FileExplorerContext);

  return (
    <CodeBlock
      language={lang}
      showLineNumbers
      className={clsx({ 'md:col-span-2': collapse })}
    >
      {file.content}
    </CodeBlock>
  );
};

export default FileContent;
