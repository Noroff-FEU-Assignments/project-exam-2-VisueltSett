//container to wrap various elements

interface Props {
  id?: string;
  className?: string;
  display?: string;
  flexDirection?: string;
  flexWrap?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
  position?: string;
}
export const ItemWrapper: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
