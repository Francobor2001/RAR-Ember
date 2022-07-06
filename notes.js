
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


//* ----Tests

//* Acceptance 
// test that exercises the whole system; automate user actions

//* Integration test
//#Good fit for component and helpers
// tests as these tests verify what they render when 
//invoked with different parameters and how they react to events.
 
//* Unit test
//#services, controllers, and models.
/*Unit tests verify that a certain unit, completely isolated from its environment
, behaves as we expect it to */


//*Add service test
//ember g service-test catalog
