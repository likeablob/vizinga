import _ from 'lodash';
import { b64ToUTF8 } from '@/lib/utils';

const parseQuery = async (query, store) => {
  const data = JSON.parse(b64ToUTF8(query.data));
  const values = [
    {
      mutation: 'setSrc',
      key: 'd',
    },
    {
      mutation: 'setTitle',
      key: 't',
    },
  ];
  values
    .map(v => {
      return Object.assign(v, {
        value: _.get(data, v.key),
      });
    })
    .filter(v => v.value)
    .forEach(v => {
      store.commit(v.mutation, v.value);
    });
};

export default ({ store, route, redirect }) => {
  if (route.path === '/' && route.query.data) {
    parseQuery(route.query, store).catch(e => {
      console.error(e);
      console.error('Failed to parse query.');
    });
    redirect('/');
  }
};
