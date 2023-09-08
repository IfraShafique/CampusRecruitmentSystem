import { createAction } from "@reduxjs/toolkit";

export const updateField = createAction('studentRegistration/updateField');
export const setError = createAction('studentRegistration/setError');
export const setInfo = createAction('studentRegistration/setInfo');
export const resetForm = createAction('studentRegistration/resetForm');
