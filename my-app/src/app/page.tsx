import { Sofia_Sans } from 'next/font/google';

const font = Sofia_Sans({ subsets: ['latin'] });

export default function Page() {
  return (
    <main>
      <h1 className={font.className}>
        Indonesia says located black box recorders from crashed plane
      </h1>
    </main>
  );
}
