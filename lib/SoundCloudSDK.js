'use strict';

/**
 * @ngdoc service
 * @name musiLandingApp.SoundCloudSDK
 * @description
 * # SoundCloudSDK
 * Service in the musiLandingApp.
 */

 var SoundCloudConfig = function() {
  	this.VERSION = '1.0';
  	this.CLIENT_ID = '';
  	this.REDIRECT_URI = '';

 	this.setVersion = function(ver) {
 		this.VERSION = ver;
 	};
 	this.getVersion = function() {
 		return this.VERSION;
 	};

 	this.setClientId = function(id) {
 		this.CLIENT_ID = id;
 	};
 	this.getClientId = function() {
 		return this.CLIENT_ID;
 	};

 	this.setRedirectUri = function(uri) {
 		this.REDIRECT_URI = uri;
 	};
 	this.getRedirectUri = function() {
 		return this.REDIRECT_URI;
 	};
    return this;
 };

angular.module('ngSoundCloudSDK', [])
  .provider('SoundCloudConfig', function MusiDataProvider() {
  	this.$get = [function MusiDataFactory() {
  		return new SoundCloudConfig();
  	}];
  })
  .service('SoundCloudSDK', ['SoundCloudConfig', function SoundCloudSDK(SoundCloudConfig) {
    var SC = window.SC;

    SC.initialize({
        client_id: SoundCloudConfig.CLIENT_ID,
        redirect_uri: SoundCloudConfig.REDIRECT_URI
    });

    return SC;

  }]);