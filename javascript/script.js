$(document).ready(function() {
    $('#projects').dataTable( {
        "paging":   false,
        "columnDefs": [
          { "width": "50%", "targets": 1 }
          ]
    } );
} );