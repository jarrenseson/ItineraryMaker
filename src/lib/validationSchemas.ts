import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const CreateEventSchema = Yup.object({
  owner: Yup.string().required(),
  name: Yup.string().required(),
  date: Yup.string().required(),
  startTime: Yup.string().required(),
  endTime: Yup.string().required(),
  location: Yup.string().required(),
  description: Yup.string().required(),
});
