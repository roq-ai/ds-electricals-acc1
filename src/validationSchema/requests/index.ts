import * as yup from 'yup';

export const requestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  service_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
