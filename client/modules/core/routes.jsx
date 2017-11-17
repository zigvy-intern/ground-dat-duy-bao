import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import Footer from '../items/components/Footer.jsx';
import Register from '../users/components/Register.jsx';
import Body from '../items/components/Body.jsx';
import Login from '../users/components/Login.jsx';
import Ground from '../items/components/GroundFind.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);
  FlowRouter.route('/', {
    name: 'items.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Footer />)
      });
    }
  });
  FlowRouter.route('/grounds', {
    name: 'ground.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Ground />)
      });
    }
  });

  FlowRouter.route('/register', {
    name: 'users.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Register />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'users.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<div><Login /></div>)
      });
    }
  });

  FlowRouter.route('/logout', {
    name: 'users.logout',
    action() {
      Meteor.logout();
      FlowRouter.go('/');
    }
  });

}
