import PropTypes from 'prop-types';

type HeadingProps = {
  title: string;
  size: string;
};

function Heading({ title, size }: HeadingProps) {
  const HeadingSize = `h${size}`;

  return (
    <>
      <HeadingSize>{title}</HeadingSize>
    </>
  );
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Heading.defaultProps = {
  size: '1',
};

export default Heading;
