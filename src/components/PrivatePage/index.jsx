import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
// import { Redirect } from 'umi';
import Redirect from 'umi/redirect';
// import {  } from 'antd-mobile';

import PageLoading from '@/components/PageLoading';

function PrivatePage(props) {
  const { children, authority, errTo, authTo } = props;

  const [auth, setAuth] = React.useState(undefined);

  React.useEffect(() => {
    let unMounting = false;

    authority()
      .then(isAuth => {
        if (unMounting) {
          return;
        }

        setAuth(!!isAuth);
      })
      .catch(() => {
        if (unMounting) {
          return;
        }

        setAuth(null);
      });

    return () => {
      unMounting = true;
    };
  }, [authority]);

  return _.isUndefined(auth) ? (
    <PageLoading />
  ) : _.isNull(auth) ? (
    <Redirect to={errTo} />
  ) : auth ? (
    children
  ) : (
    <Redirect to={authTo} />
  );
}

PrivatePage.propTypes = {
  // authority: PropTypes.func.isRequired,
  // errTo: PropTypes.string.isRequired,
  // authTo: PropTypes.string.isRequired,
};

PrivatePage.defaultProps = {};

export default React.memo(PrivatePage);
