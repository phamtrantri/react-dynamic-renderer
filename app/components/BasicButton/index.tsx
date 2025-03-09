import throttle from "lodash/throttle";

interface IProps {
  text: string;
  onClick: () => Promise<void> | void;
  className?: string;
}

const BasicButton: React.FC<IProps> = ({ text, onClick, className = "" }) => {
  const debouncedOnClick = throttle(onClick, 500);

  return (
    <button onClick={debouncedOnClick} className={className}>
      <span>{text}</span>
    </button>
  );
};

export default BasicButton;
