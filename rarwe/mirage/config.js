export default function () {
  //mock out the network request the app makes against the back-end
  this.get('/bands');
  this.get('/bands/:id');
}
