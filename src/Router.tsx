import React from "react";

const Home = React.lazy(() => import("./pages/Home"));

const routes = [{path: "/", exact: true, name: "Home", component: Home}];

export default routes;

// const Router = () => {
//   <BrowserRouter>
//     <Switch>
//       <Route exact={true} path="/" component={Top} />
//       {/*Not Found*/}
//       <Route component={() => <Redirect to="/" />} />
//     </Switch>
//   </BrowserRouter>;
// };

// export default Router;
