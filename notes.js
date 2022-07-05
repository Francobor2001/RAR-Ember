
//*Estrucrture
//application/bands/band/songs

//* Add route
// $ ember g route bands ===> Add Route
// $ ember g route bands/band --path=':id' ==> Add a subpath and change the route (instead of the name it uses an id)

//* Delete route
// ember destroy route songs

//#----------Router
//were we define the routes and the hierarchy of them

//# -------------Templates
// the views, wich use a model
//# {{outlet}}
//slot in the template for the children routes to render their content


//# -------------Route
//Were we define the model the template will use

//? modelFor() ==> fetches the model of the parent route 

