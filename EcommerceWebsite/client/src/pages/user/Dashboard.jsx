import React from "react";
import Layout from "../../components/layout/Layout";
import UserMenu from "../../components/layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"DashBoard-homePage"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3"></div>
            <h1>Name: {auth?.user?.name}</h1>
            <h1>email: {auth?.user?.email}</h1>
            <h1>Address: {auth?.user?.address}</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
