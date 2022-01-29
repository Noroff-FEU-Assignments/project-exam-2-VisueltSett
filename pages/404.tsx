import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div className="not-found">
      <h1>Beklager!</h1>
      <h2>Vi kan dessverre ikke finne siden du ser etter.</h2>
      <p>
        Gå tilbake til{' '}
        <Link href="/">
          <a>startsiden</a>
        </Link>
        , eller{' '}
        <Link href="/kontakt-oss">
          <a>kontakt oss</a>
        </Link>
        , og vi vil gjøre vårt beste for å hjelpe deg.
      </p>
    </div>
  );
};

export default NotFound;
