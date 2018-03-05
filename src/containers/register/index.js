import React from 'react';
import { connect } from 'react-redux';

import RegisterForm from '../../components/RegisterForm';
import ShowContent from '../../components/ShowContent';

import { notify } from '../../modules/app';

const Comp = props => {
  const { form, dispatch } = props;

  return (
    <div>
      <RegisterForm
        onSubmit={() => dispatch(notify('Congratz! All data is valid'))}
      />
      <ShowContent
        content={form.register && JSON.stringify(form.register.values, null, 4)}
      />
    </div>
  );
};

export default connect(state => state)(Comp);
