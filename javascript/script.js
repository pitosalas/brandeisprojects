$(document).ready(function() {
    $('#projects').dataTable( {
        "columnDefs": [
          { "width": "5%", "targets": 1},
          { "width": "60%", "targets": 2},
          { "width": "10%", "targets": 3},
          { "width": "10%", "targets": [4, 5]}
          ],
        "paging":   false
    } );
});
