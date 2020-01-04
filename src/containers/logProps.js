import React from 'react';

const injectProps = owner=>Component=>props=><Component owner={owner} {...props} />

export default injectProps;
