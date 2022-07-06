export default function () {
  //mock out the network request the app makes against the back-end
  this.get('/bands');
  this.get('/bands/:id');

  this.post('/bands/:id/songs', function (schema, request){
    debugger
  });

  this.get('/bands/:id/songs', function (schema, request) {
    let id = request.params.id;
    return schema.songs.where({ bandId: id });
  });

  this.post('/bands');
}
