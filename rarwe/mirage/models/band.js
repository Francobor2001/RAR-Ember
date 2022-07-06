import { Model, hasMany } from 'miragejs';

//Simple properties don't need to be defined,
// butwe need to define relationships
export default Model.extend({
  songs: hasMany(),
});
