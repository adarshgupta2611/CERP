import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Sidebar = (props) => {
  const param = useParams();
  const profileLink = "/student/" + param.id + "/profile";
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
      <CDBSidebar textColor="#fff" backgroundColor="-webkit-linear-gradient(left, #3931af, #00c6ff)">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href={`/student/${param.id}`} className="text-decoration-none" style={{ color: 'inherit' }}>
            Contents
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to={`/student/${param.id}`} exact>
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to={`/student/${param.id}/timetable`} exact>
              <CDBSidebarMenuItem icon="table">Time Tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to={`/student/${param.id}/feedback`} exact>
              <CDBSidebarMenuItem icon="user">Feedback</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to={profileLink} exact>
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;