import * as Yup from 'yup';

export const formKeysMember = {
  name: 'name',
  dni: 'dni',
  email: 'email',
  phone: 'phone',
  siteAddress: 'siteAddress',
};

export const createOrEditMemberProperties = {
  initialValues: {
    [formKeysMember.name]: '',
    [formKeysMember.dni]: '',
    [formKeysMember.email]: '',
    [formKeysMember.phone]: '',
    [formKeysMember.siteAddress]: '',
  },
  initialErrors: {},
  labels: {
    [formKeysMember.name]: 'Nombre',
    [formKeysMember.dni]: 'Documento de Identidad',
    [formKeysMember.email]: 'Correo Electrónico',
    [formKeysMember.phone]: 'Teléfono',
    [formKeysMember.siteAddress]: 'Dirección',
  },
  schema: Yup.object({
    [formKeysMember.name]: Yup.string().required('Ingresa el nombre'),
    [formKeysMember.dni]: Yup.string().required(
      'Ingresa el documento de identidad',
    ),
    [formKeysMember.email]: Yup.string()
      .email('Ingresa un correo electrónico válido')
      .required('Ingresa el correo electrónico'),
    [formKeysMember.phone]: Yup.string().required('Ingresa el teléfono'),
    [formKeysMember.siteAddress]: Yup.string().required('Ingresa la dirección'),
  }),
};
