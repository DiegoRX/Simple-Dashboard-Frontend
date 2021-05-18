import RequestService from '../config';
import { success, rejected } from '../functions/SweetAlert/Alerts';

const handleSubmit = async (url, body, onClick) => {
  const res = await RequestService.put(url, body);
  if (res.status === 201) {
    success('Administrador Editado');
    onClick();
  } else if (res.status === 400) {
    rejected();
    // onClick();
  };
};

export default handleSubmit;
