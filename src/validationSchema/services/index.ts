import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  price: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
