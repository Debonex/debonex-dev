import CodeBlock from '@theme/CodeBlock';
import React, { FC } from 'react';
import { File } from '.';

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

  return (
    <CodeBlock language={lang} showLineNumbers>
      {file.content}
    </CodeBlock>
  );
};

export default FileContent;
