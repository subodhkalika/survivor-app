// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const {ipcRenderer} = require('electron');



document.addEventListener('DOMContentLoaded', function() {
  // Add the add button click event
  const addButton = document.getElementById('add');
  if (addButton) {
    addButton.addEventListener('click', () => {
      // Retrieve the input fields
      var supportworker = document.getElementById('supportworker');
      var firstname = document.getElementById('firstname');
      var lastname = document.getElementById('lastname');
      var gender = document.getElementById('gender');
      var address = document.getElementById('address');
      var contact = document.getElementById('contact');
      var employment_status = document.getElementById('employment_status');
      var living_arrangement = document.getElementById('living_arrangement');
      var indigenous_or_toress_stright_islander = document.getElementById('indigenous_or_toress_stright_islander');
      var os_organisation = document.getElementById('os_organisation');
      var os_support_worker = document.getElementById('os_support_worker');
      var os_email = document.getElementById('os_email');
      var household_composition = document.getElementById('household_composition');
      var current_circumstances = document.getElementById('current_circumstances');
      var about_us = document.getElementById('about_us');
      var assistance_required = document.getElementById('assistance_required');
      var has_survivors_helped = document.getElementById('has_survivors_helped');
      ipcRenderer.send("saveInfo", {
        supportworker: supportworker.value,
        firstname: firstname.value,
        lastname: lastname.value,
        gender: gender.value,
        address: address.value,
        contact: contact.value,
        employment_status: employment_status.value,
        living_arrangement: living_arrangement.value,
        indigenous_or_toress_stright_islander: indigenous_or_toress_stright_islander.value,
        os_organisation: os_organisation.value,
        os_support_worker: os_support_worker.value,
        os_email: os_email.value,
        household_composition: household_composition.value,
        current_circumstances: current_circumstances.value,
        about_us: about_us.value,
        assistance_required: assistance_required.value,
        has_survivors_helped: has_survivors_helped.value,
      });
      // Reset the input fields
      supportworker.value = '';
      firstname.value = '';
      lastname.value = '';
      gender.value = '';
      address.value = '';
      contact.value = '';
      employment_status.value = '';
      living_arrangement.value = '';
      indigenous_or_toress_stright_islander.value = '';
      os_organisation.value = '';
      os_support_worker.value = '';
      os_email.value = '';
      household_composition.value = '';
      current_circumstances.value = '';
      about_us.value = '';
      assistance_required.value = '';
      has_survivors_helped.value = '';
    });
  }
})