import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { $ } from 'meteor/jquery';


/*                        LANDING ROUTE                       */

export const landingPageRouteName = 'Landing_Page';
FlowRouter.route('/', {
  name: landingPageRouteName,
  action() {
    BlazeLayout.render('Landing_Layout', { main: landingPageRouteName });
  },
});

/*                        DIRECTORY ROUTE                       */

function addDirectoryBodyClass() {
  $('body').addClass('directory-page-body');
}

function removeDirectoryBodyClass() {
  $('body').removeClass('directory-page-body');
}

export const directoryPageRouteName = 'Directory_Page';
FlowRouter.route('/directory', {
  name: directoryPageRouteName,
  action() {
    BlazeLayout.render('Directory_Layout', { main: directoryPageRouteName });
  },
  triggersEnter: [addDirectoryBodyClass],
  triggersExit: [removeDirectoryBodyClass],
});


/*                        USER ROUTES                      */


function addUserBodyClass() {
  $('body').addClass('user-layout-body');
}

function removeUserBodyClass() {
  $('body').removeClass('user-layout-body');
}

const userRoutes = FlowRouter.group({
  prefix: '/:username',
  name: 'userRoutes',
  triggersEnter: [addUserBodyClass],
  triggersExit: [removeUserBodyClass],
});

export const profilePageRouteName = 'Profile_Page';
userRoutes.route('/profile', {
  name: profilePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: profilePageRouteName });
  },
});

export const adminPageRouteName = 'Admin_Page';
userRoutes.route('/admin', {
  name: adminPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: adminPageRouteName });
  },
});

export const editProfilePageRouteName = 'Edit_Profile_Page';
userRoutes.route('/edit-profile', {
  name: editProfilePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: editProfilePageRouteName });
  },
});

export const viewRecipePageRouteName = 'View_Recipe_Page';
userRoutes.route('/viewrecipe', {
  name: viewRecipePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: viewRecipePageRouteName });
  },
});

export const editRecipePageRouteName = 'Edit_Recipe_Page';
userRoutes.route('/editrecipe', {
  name: editRecipePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: editRecipePageRouteName });
  },
});

export const filterPageRouteName = 'Filter_Page';
userRoutes.route('/filter', {
  name: filterPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: filterPageRouteName });
  },
});

export const homePageRouteName = 'Home_Page';
userRoutes.route('/home', {
  name: homePageRouteName,
  action() {
    BlazeLayout.render('Home_Layout', { main: homePageRouteName });
  },
});

/*                        MISC ROUTES                       */
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('Page_Not_Found');
  },
};
