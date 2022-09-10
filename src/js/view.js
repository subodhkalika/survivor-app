const {ipcRenderer} = require('electron');
document.addEventListener('DOMContentLoaded', function() {
  ipcRenderer.send("populate", {ok: 1});
  ipcRenderer.on("populating", (event, persons) => {
    if (persons) {
      // Generate the table body
      var tableBody = '';
      Object.values(persons).forEach(person => {
        tableBody += '<tr>';
          tableBody += '  <td>' + person.firstname + '</td>';
          tableBody += '  <td>' + person.lastname + '</td>';
          tableBody += '  <td>' + person.address + '</td>';
          tableBody += '  <td>' + person.contact + '</td>';
          tableBody += '  <td><input type="button" value="Delete" onclick="deletePerson(\'' + person._id + '\')"></td>'
          tableBody += '</tr>';
      });
  
      // Fill the table content
      const t = document.getElementById('tablebody');
      t.innerHTML = tableBody;
    }
  });
});
// Deletes a person
function deletePerson(id) {
  // Delete the person from the database
  database.deletePerson(id);
  // Repopulate the table
  // populateTable();
}