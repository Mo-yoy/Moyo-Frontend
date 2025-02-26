type SpacerProps =
  | { width: number; height?: never }
  | { width?: never; height: number };

const Spacer = ({ width, height }: SpacerProps) => {
  return (
    <div
      css={{
        ...(width && { width: `${width}rem` }),
        ...(height && { height: `${height}rem` }),
      }}
    />
  );
};

export default Spacer;
