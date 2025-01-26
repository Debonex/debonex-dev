import { FC } from 'react';
import Layout from '@theme/Layout';
import Mine1 from '@site/src/assets/svg/mine1.svg';


const Cell: FC = () => {
  return (
    <div className="h-6 w-6 border-[3px] border-solid border-b-[#232a32] border-l-[#6f7880] border-r-[#232a32] border-t-[#6f7880] bg-[#4d545c]"></div>
  );
};

const OpenCell: FC = () => {
  return (
    <div className="h-6 w-6 border-2 border-solid border-transparent border-l-[#1e262e] border-t-[#1e262e] bg-[#384048]">
      <Mine1 className="w-[22px] h-[22px]" />
    </div>
  );
};

const MineSweeper: FC = () => {
  return (
    <Layout>
      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(10,min-content)' }}
      >
        {Array.from({ length: 100 }).map((_, idx) =>
          idx % 2 == 0 ? <Cell key={idx} /> : <OpenCell key={idx} />,
        )}
      </div>
    </Layout>
  );
};

export default MineSweeper;
