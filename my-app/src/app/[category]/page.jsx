import { Suspense } from 'react';
import CategoryNews from './CategoryNews';

export default function CategoryPage() {
  return (
    <Suspense fallback={null}>
      <CategoryNews />
    </Suspense>
  );
}
