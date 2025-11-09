import * as Yup from 'yup';
import {bloodTypes} from './bloodType';
import {gender} from './gender';

export const formKeysMember = {
  name: 'name',
  dni: 'dni',
  email: 'email',
  phone: 'phone',
  siteAddress: 'siteAddress',
  serviceHealth: 'serviceHealth',
  birthDate: 'birthDate',
  gender: 'gender',
  bloodTypes: 'bloodTypes',
};

export const createOrEditMemberProperties = {
  initialValues: {
    [formKeysMember.name]: '',
    [formKeysMember.dni]: '',
    [formKeysMember.email]: '',
    [formKeysMember.phone]: '',
    [formKeysMember.siteAddress]: '',
    [formKeysMember.serviceHealth]: '',
    [formKeysMember.birthDate]: '',
    [formKeysMember.gender]: '',
    [formKeysMember.bloodTypes]: '',
  },
  initialErrors: {},
  labels: {
    [formKeysMember.name]: 'Nombre',
    [formKeysMember.dni]: 'Documento de Identidad',
    [formKeysMember.email]: 'Correo Electrónico',
    [formKeysMember.phone]: 'Teléfono',
    [formKeysMember.siteAddress]: 'Dirección',
    [formKeysMember.serviceHealth]: 'EPS',
    [formKeysMember.birthDate]: 'Fecha de nacimiento',
    [formKeysMember.gender]: 'Genero',
    [formKeysMember.bloodTypes]: 'Tipo de sangre',
  },
  schema: Yup.object({
    [formKeysMember.name]: Yup.string().required('Ingresa el nombre'),
    [formKeysMember.dni]: Yup.string().required(
      'Ingresa el documento de identidad',
    ),
    [formKeysMember.email]: Yup.string()
      .email('Ingresa un correo electrónico válido')
      .required('Ingresa el correo electrónico'),
    [formKeysMember.serviceHealth]: Yup.string().required('Ingresa la EPS'),
    [formKeysMember.birthDate]: Yup.string().required('Fecha de nacimiento.'),

    [formKeysMember.phone]: Yup.string(),
    [formKeysMember.siteAddress]: Yup.string(),
    [formKeysMember.gender]: Yup.string().oneOf(gender),
    [formKeysMember.bloodTypes]: Yup.string().oneOf(bloodTypes),
  }),
};
