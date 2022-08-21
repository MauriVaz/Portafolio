import Image from 'next/image';
import ScrollIcon from './ScrollIcon';

const Scroll = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fixed">
      <button
        className="fixed top-1/4 h-1/6 bg-cyan-100 rounded-xl p-2 opacity-10 hover:opacity-90"
        onClick={() => {
          scrollToTop();
        }}>
        <ScrollIcon />
      </button>
    </div>
  );
};

export default Scroll;
