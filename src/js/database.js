const Store = require('electron-store');
const store = new Store();


// const electron = require('electron');
// const fs = require('fs');
// const path = require('path');
const { v4: uuidv4 } = require('uuid');


// const dataPath = electron.app.getPath('userData');
// const filePath = path.join(dataPath, 'config.json');

function parseData() {
  const defaultData = {};
  try {
    return JSON.parse(store.get('users'));
  } catch(error) {
    return defaultData;
  }
}

function writeData(key, value){
  let contents = parseData();
  contents[key] = value;
  store.set('users', JSON.stringify(contents));
}

function readAll() {
  let contents = parseData();
  return contents;
}

function readDataById(key) {
  let contents = parseData();
  return contents[key];
}

// Adds a person
exports.addPerson = function(
  supportworker,
  firstname,
  lastname,
  gender,
  address,
  contact,
  employment_status,
  living_arrangement,
  indigenous_or_toress_stright_islander,
  os_organisation,
  os_support_worker,
  os_email,
  household_composition,
  current_circumstances,
  about_us,
  assistance_required,
  has_survivors_helped,
) {

  // Create the person object
  var person = {
    "supportworker": supportworker,
    "firstname": firstname,
    "lastname": lastname,
    "gender": gender,
    "address": address,
    "contact": contact,
    "employment_status": employment_status,
    "living_arrangement": living_arrangement,
    "indigenous_or_toress_stright_islander": indigenous_or_toress_stright_islander,
    "os_organisation": os_organisation,
    "os_support_worker": os_support_worker,
    "os_email": os_email,
    "household_composition": household_composition,
    "current_circumstances": current_circumstances,
    "about_us": about_us,
    "assistance_required": assistance_required,
    "has_survivors_helped": has_survivors_helped,
  };
  
  // Save the person to the database
  writeData(uuidv4(), person);
};

// Returns all persons
exports.getPersons = function() {
  // Get all persons from the database
  readAll();
}

// // Deletes a person
// exports.deletePerson = function(id) {

//   db.remove({ _id: id }, {}, function(err, numRemoved) {
//     // Do nothing
//   });
// }
