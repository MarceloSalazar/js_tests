
var my_array = {};


function print_console() {

    console.log(' ')


    for (var i = 0; i < 3; i++) {
        c = i + ':'
        for (var j = 0; j < 3; j++) {

            c += my_array[i][j] + ' ';
        }
        console.log(c);
    }
}

function init_array() {

    for (var i = 0; i < 3; i++) {
            my_array[i] = [];

            for (var j = 0; j < 3; j++) {
                my_array[i][j] =  ' ';
            }
        }


}

function print_HTML() {


    var htmlarray_id = document.getElementById("mytable");

    var result = '';

    for (var i = 0; i < 3; i++) {

        result += '<tr>';

        for (var j = 0; j < 3; j++) {
            result += '<td>' + my_array[i][j] + "</td>";
        }
        result += "</tr>";
    }

    htmlarray_id.innerHTML = result;

    console.log("Hello tictactoe");

}

function NewGame() {
    init_array();
    print_console();
    print_HTML();
}
