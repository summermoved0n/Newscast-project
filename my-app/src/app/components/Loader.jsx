import { ClipLoader } from 'react-spinners';

export default function Loader({ loading }) {
  return (
    <div className="flex justify-center items-center">
      <ClipLoader color="#F65050" loading={loading} size={70} />
    </div>
  );
}
