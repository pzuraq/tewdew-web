import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.apiUrl,
  namespace: config.apiNamespace
});
