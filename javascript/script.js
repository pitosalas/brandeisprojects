$(document).ready(function() {
    $('#projects').dataTable( {
        "columnDefs": [
          { "width": "50%", "targets": 3 },
          { "width": "3%", "targets": [ 4, 5, 6 ]}
          ],
        "paging":   false
    } );
});
