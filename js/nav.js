'use strict';

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

$body.on('click', '#nav-all', navAllStories);
/** Show main list of all stories when click site name */
function navAllStories(evt) {
   console.debug('navAllStories', evt);
   hidePageComponents();
   putStoriesOnPage();
}

$navLogin.on('click', navLoginClick);
/** Show login/signup on click on "login" */
function navLoginClick(evt) {
   console.debug('navLoginClick', evt);
   hidePageComponents();
   $loginForm.show();
   $signupForm.show();
}

/** When a user first logins in, update the navbar to reflect that. */
function updateNavOnLogin() {
   console.debug('updateNavOnLogin');
   $('.main-nav-links').show();
   $navLogin.hide();
   $navLogOut.show();
   $navUserProfile.text(`${currentUser.username}`).show();
}

// NOTE: added all below
$navSubmitStory.on('click', navSubmitStoryClick);
// show story form
function navSubmitStoryClick(evt) {
   console.debug('navSubmitStoryClick', evt);
   hidePageComponents();
   $allStoriesList.show();
   $submitForm.show();
}

$body.on('click', '#nav-favorites', navFavoritesClick);
/** Show favorite stories on click on "favorites" */
function navFavoritesClick(evt) {
   console.debug('navFavoritesClick', evt);
   hidePageComponents();
   putFavoritesListOnPage();
}

$body.on('click', '#nav-my-stories', navMyStories);
/** Show My Stories on clicking "my stories" */
function navMyStories(evt) {
   console.debug('navMyStories', evt);
   hidePageComponents();
   putUserStoriesOnPage();
   $ownStories.show();
}

$navUserProfile.on('click', navProfileClick);
/** Hide everything but profile on click on "profile" */
function navProfileClick(evt) {
   console.debug('navProfileClick', evt);
   hidePageComponents();
   $userProfile.show();
}
