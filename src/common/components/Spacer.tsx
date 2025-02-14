type SpacerProps =
  | { width: `${number}rem`; height?: never }
  | { width?: never; height: `${number}rem` };

const Spacer = ({ width, height }: SpacerProps) => {
  return <div css={{ width, height }} />;
};

export default Spacer;
