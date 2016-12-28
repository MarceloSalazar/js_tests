// Sudoku solver
//==============

/**
 Features:
 1. Create object - done
 2. Print object in console - done
 3. Print in HTML when click button - done
 4. Input box & initialize array accordingly - done
*/

"use strict";

var my_sudoku = {};

class Sudoku {

    constructor(ncells) {

        if (ncells > 10) {
            console.log("Error. Number of cells > 10")
            return 0;
        }

        this.ncells = ncells;

        this.matrix = [];

        for (var i = 0; i < ncells; i++) {

            this.matrix[i] = [];

            for (var j = 0; j < ncells; j++) {
                this.matrix[i][j] = ' '; // Math.floor(Math.random() * 10) + 0;
            }
        }
    }

    print() {
        console.log(' ')

        let c = ' ' + '-'.repeat(4 * this.ncells - 1);
        console.log(c);

        for (var i = 0; i < this.ncells; i++) {
            c = '|'
            for (var j = 0; j < this.ncells; j++) {

                c = c + ' ' + this.matrix[i][j] + ' |';
            }
            console.log(c);

            c = ' ' + '-'.repeat(4 * this.ncells - 1);
            console.log(c);

        }
    }


    init(value, x, y) {
        this.matrix[x][y] = value;
    }

    get_array() {
        return this.matrix;
    }
}


function updateTable(myArray) {

    var result = "<table border=10>";

    for (var i = 0; i < myArray.length; i++) {

        result += "<tr>";

        for (var j = 0; j < myArray[i].length; j++) {
            result += "<td>" + myArray[i][j] + "</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
}

function tableText(tableCell) {

    var number = prompt("Please add a new number", "0");
    if (number != null) {
        number = parseInt(number, 10);

        if (Number.isInteger(number)) {
            tableCell.innerHTML = number;
            console.log(number);
        }
    }

}


function Click() {

    var ncells = document.getElementById("id_ncell").value;
    my_sudoku = new Sudoku(ncells);

    my_sudoku.print(); // optional print to the console

    // Update the HTML table
    document.getElementById("thisTable").innerHTML = updateTable(my_sudoku.get_array());

    var table = document.getElementById("thisTable");

    if (table != null) {
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++)
            table.rows[i].cells[j].onclick = function () {
                tableText(this);
            };
        }
    }
}

function Debug() {

    if(my_sudoku != null)
        my_sudoku.print(); // optional print to the console
}

