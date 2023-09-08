import { AppThunk } from "../index";

import { 
  MODAL_CONFIRM,
	MetaModalConfirm,

	MODAL_SUCCESS,
	MetaModalSuccess,

	MODAL_ERROR,
	MetaModalError
} from "../slices/modalSlice";

export const modalConfirm = (
	open, 
	meta
) => (dispatch, getState) => {
	dispatch(MODAL_CONFIRM({
		isModalConfirm:open,
		meta:meta
	}))
}

export const modalSuccess = (
	open,
	meta
) => (dispatch) => {
	dispatch(MODAL_SUCCESS({
		isModalSuccess:open,
		meta:meta
	}))
}

export const modalError = (
	open,
	meta
) => (dispatch) => {
	dispatch(MODAL_ERROR({
		isModalError:open,
		meta:meta
	}))
}
