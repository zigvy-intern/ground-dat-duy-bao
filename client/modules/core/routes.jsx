import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import Footer from '../items/components/Footer.jsx';
import Register from '../users/components/Register.jsx';
import Body from '../items/components/Body.jsx';
import Login from '../users/components/Login.jsx';
import Ground from '../items/components/GroundFind.jsx';
import GroundInfo from '../items/components/GroundInfo.jsx';
import Step1 from '../items/components/Step1.jsx';
import Step2 from '../items/components/Step2.jsx';

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

  FlowRouter.route('/groundinfo', {
    name: 'ground.info',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<GroundInfo />)
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

  FlowRouter.route('/step1', {
    name: 'ground.step1',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Step1 />)
      });
    }
  });

  FlowRouter.route('/step2', {
    name: 'ground.step2',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Step2 />)
      });
    }
  });
}
