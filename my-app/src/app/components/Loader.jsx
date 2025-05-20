import { BounceLoader } from 'react-spinners';

export default function Loader({ loading, className = '' }) {
  return (
    <div className={`${className}`}>
      <BounceLoader color="#F65050" loading={loading} size={70} />
    </div>
  );
}
