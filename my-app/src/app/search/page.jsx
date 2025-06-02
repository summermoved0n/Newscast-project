import { Suspense } from 'react';
import SearchNews from './SearchNews';

export default function SearchPage() {
  return (
    <Suspense fallback={null}>
      <SearchNews />
    </Suspense>
  );
}
