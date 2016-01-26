import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

let ko = require('knockout');

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {

  this.firstName = ko.observable("Bert");
  this.lastName = ko.observable("Bertington");

  this.fullName = ko.computed(function(){

    return this.firstName() + " " + this.lastName();
  }, this);

  this.capitalizeLastName = function() {
    let currentVal = this.lastName();
    this.lastName(currentVal.toUpperCase());
  };

  this.lowercaseLastName = function() {
    let currentVal = this.lastName();
    this.lastName(currentVal.toLowerCase());
  };

  this.capitalizeFirstLetter = function() {
    let currentVal = this.lastName();
    this.lastName(currentVal.charAt(0).toUpperCase()+currentVal.slice(1));
  };
    
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
