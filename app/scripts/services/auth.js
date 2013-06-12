'use strict';

angular.module('floussApp')
	.factory('auth', ['$cookieStore', function auth($cookieStore) {
		var _user = null;
		// It sets the current logged user with the info
		_user = $cookieStore.get('user');

		// Public API here
		return {
			// Called when the user log in
			login: function login(user) {
				_user = user;
				$cookieStore.put('user', _user);
			},
			// Check if the user is logged
			isConnected: function isConnected() {
				return _user ? true : false;
			},
			// Return the current logged user
			getUser: function getUser() {
				return _user;
			},
			// Return the id of the current user
			getId: function getId() {
				return _user ? _user.id : null;
			},
			// Return the current token of the user
			getToken: function getToken() {
				return _user ? _user.token : null;
			},
			// Remove the user cookie and set to null the current user object
			logout: function logout() {
				$cookieStore.remove('user');
				_user = null;
			}
		};
	}]);
