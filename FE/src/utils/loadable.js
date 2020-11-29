import React, { lazy, Suspense } from 'react';
import { PropTypes } from 'prop-types';

/**
 * Lazy Suspense
 * @param importStatement
 * @param fallback
 */
const loadable = (importStatement, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importStatement);

  /*
  return (
    <Suspense fallback={<CircularProgress />}>
      <LazyComponent />
    </Suspense>
  );
  */

  // render prop
  return props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

loadable.PropTypes = {
  importStatement: PropTypes.func,
}

export default loadable;
