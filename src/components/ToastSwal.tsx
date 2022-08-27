import Swal from 'sweetalert2';
import withReactContent, { ReactSweetAlert } from 'sweetalert2-react-content';
import './toast.module.css';
export default function ToastSwal(): [typeof Swal & ReactSweetAlert] {
	const Toast = Swal.mixin({
		toast: true,
		showConfirmButton: false,
		timer: 1500,
		timerProgressBar: true
	});

	Toast.mixin({
		customClass: {
			popup: 'swal2-popup'
		}
	});

	const FormedSwal = withReactContent(Toast);

	return [FormedSwal];
}
