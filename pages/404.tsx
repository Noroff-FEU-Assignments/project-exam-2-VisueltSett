import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Huff da...</h1>
      <h2>Vi beklager, men vi kan dessverre ikke finne siden du ser etter.</h2>
      <p>
        Følg denne linken for å gå tilbake til startsiden:{' '}
        <Link href="/">
          <a>Hjem</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
