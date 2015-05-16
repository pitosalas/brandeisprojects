$(document).ready(function() {
    $('#projects').dataTable( {
        "columnDefs": [
          { "width": "50%", "targets": 1 },
          { "width": "3%", "targets": [ 2, 3, 4 ]}
          ], 
        "paging":   false
    } );
});
