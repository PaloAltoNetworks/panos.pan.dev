import React from 'react';
import Layout from '@theme/Layout';
import Redocusaurus from '../../components/Redocusaurus';

function ExpeditionAPI() {
  return (
  <Layout
    title={`Expedition API Docs`}
    description={`Open API Reference Docs for the Expedition API`}
  >
    <Redocusaurus spec="/expedition.json" />
  </Layout>
  );
}

export default ExpeditionAPI;