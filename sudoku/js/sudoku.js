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

function updateCell(array) {

    var cellIndex  = array.cellIndex;
    var rowIndex = array.parentNode.rowIndex;

    var number = prompt("Please add a new number (cell: " + cellIndex + " / row: " + rowIndex, "0");

    if (number != null) {
        number = parseInt(number, 10);
    }

    if (Number.isInteger(number)) {
        my_sudoku.updateValue(number,rowIndex,cellIndex);
        my_sudoku.updateHTMLtable();
    }
}


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


    updateHTMLtable() {

        var result = "<table border=10>";

        var htmlarray_id = document.getElementById("thisTable");

        this.array_id = htmlarray_id;

        for (var i = 0; i < this.ncells; i++) {
            result += '<tr>';

            for (var j = 0; j < this.ncells; j++) {
                result += '<td>' + this.matrix[i][j] + "</td>";
            }
            result += "</tr>";
        }
        result += "</table>";

        this.array_id.innerHTML = result;

        var cells = htmlarray_id.getElementsByTagName("td");

        for(var i = 0; i < cells.length; i++){

            var cell = cells[i];
            cell.onclick = function(){
                updateCell(this);
            };
        }
    }

    updateValue(value, x, y) {
        this.matrix[x][y] = value;
    }

    get_array() {
        return this.matrix;
    }
}


function NewSudoku() {

    var ncells = document.getElementById("id_ncell").value;

    my_sudoku = new Sudoku(ncells);

    my_sudoku.print(); // optional print to the console

    my_sudoku.updateHTMLtable();

    return 0;


}

function Debug() {

    if(my_sudoku != null)
        my_sudoku.print(); // optional print to the console
}

