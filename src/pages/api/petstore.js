import React from 'react';
import Layout from '@theme/Layout';
import Redocusaurus from '../../components/Redocusaurus';

function PetStore() {
  return (
  <Layout
    title={`Pet Store`}
    description={`Open API Reference Docs for the API`}
  >
    <Redocusaurus spec="/petstore.yml" />
  </Layout>
  );
}

export default PetStore;