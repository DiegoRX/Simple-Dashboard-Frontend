import Swal from 'sweetalert2';
import '@sweetalert2/themes/bootstrap-4';

const confirmation = (row, message) => {
  if (row.isActive === false) {
    Swal.fire({
      title: `¿Desea activar este ${message}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00bac7',
      cancelButtonColor: '#f01473',
      confirmButtonText: 'Activar',
      buttonsStyling: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
      customClass: {
        confirmButton: 'confirm-button-class',
        cancelButton: 'cancel-button-class',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Activate(row);
      }
    });
  } else {
    Swal.fire({
      title: `¿Desea desactivar este ${message}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00bac7',
      cancelButtonColor: '#f01473',
      confirmButtonText: 'Desactivar',
      buttonsStyling: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
      customClass: {
        confirmButton: 'confirm-button-class',
        cancelButton: 'cancel-button-class',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Desactivate(row);
      }
    });
  }
};

const success = (message) => {
  Swal.fire({
    position: 'bottom-end',
    icon: 'success',
    title: `¡${message}!`,
    width: '500px',
    padding: '0px',
    background: '#EDF7ED',
    toast: true,
    showConfirmButton: false,
    timer: 3500,
    customClass: {
      title: 'title-alert',
    },
  });
};

const rejected = () => {
  Swal.fire({
    position: 'bottom-end',
    icon: 'error',
    title: 'Error al ingrear los datos. Intentalo más tarde.',
    showConfirmButton: false,
    width: '500px',
    padding: '0px',
    background: '#F8D7DA',
    toast: true,
    timer: 3500,
    customClass: {
      title: 'title-alert',
    },
  });
};

export { confirmation, rejected, success };
