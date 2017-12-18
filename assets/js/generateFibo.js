$(document).ready(function() {
    $("#btn").click(function() {
        var first_number = 0;
        var second_number = 1;

        var size = $("#number").val();
        result = $("#result");
        var output = '0,1';

        for (i = 0; i < size - 2; i++) {
            var next_number = first_number + second_number;
            output = (output + (",") + next_number);
            first_number = second_number;
            second_number = next_number;
        }
        $("#result").html(output);
    });
});