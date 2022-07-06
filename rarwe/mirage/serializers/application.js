import { JSONAPISerializer } from 'miragejs';

export default JSONAPISerializer.extend({
  //Mirage serializer return a response very similar to what our real back-end does.
  links(resource) {
    let { id, modelName } = resource;
    if (modelName === 'band') {
      return {
        songs: {
          related: `/bands/${id}/songs`,
          self: `/bands/${id}/relationships/songs`,
        },
      };
    }
  },
});
