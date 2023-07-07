import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  table_number: yup.number().integer().required(),
  guest_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});
