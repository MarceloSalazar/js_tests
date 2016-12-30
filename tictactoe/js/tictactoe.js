function NewGame() {


    var htmlarray_id = document.getElementById("mytable");

    var result = '';

    for (var i = 0; i < 3; i++) {

        result += '<tr>';

        for (var j = 0; j < 3; j++) {
            result += '<td>' + 'x' + "</td>";
        }
        result += "</tr>";
    }

    htmlarray_id.innerHTML = result;

    console.log("Hello tictactoe");

}
