$(document).ready(function() {
    $('#projects').dataTable( {
        "columnDefs": [
          { "width": "5%", "targets": 1},
          { "width": "60%", "targets": 2 },
          { "width": "2%", "targets": [ 3, 4, 5]}
          ],
        "paging":   false,
        "order": [[ 5, 'desc' ]]
    } );
});
