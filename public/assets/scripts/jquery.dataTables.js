import $ from 'jquery';
import 'datatables.net';

if (typeof document !== 'undefined') {
    $(document).ready(function () {
        $('#example').DataTable();
    });
}