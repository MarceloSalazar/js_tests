// Sudoku solver
//==============

// 1. Create object - done
// 2. Print object in console - done
// 3. Print in HTML when click button - done

"use strict";


class Sudoku {

    constructor(rows,columns){

        if(rows > 9){
            console.log("Error. Row > 9")
            return 0;
        }

        if(columns > 9){
            console.log("Error. Columns > 9")
            return 0;
        }

        this.rows = rows;
        this.columns = columns;

        this.matrix = [];

        for(var i=0;i<rows;i++){

            this.matrix[i] = [];

            for(var j=0;j<columns;j++){
                this.matrix[i][j] = Math.floor(Math.random() * 10) + 0;
            }
        }
    }

    print(){
        console.log(' ')

        let c = ' ' + '-'.repeat(4*this.columns-1);
        console.log(c);

        for(var i=0;i<this.rows;i++){
            c = '|'
            for(var j=0;j<this.columns;j++){

                c = c + ' ' + this.matrix[i][j]+ ' |';
            }
            console.log(c);

            c = ' ' + '-'.repeat(4*this.columns-1);
            console.log(c);

        }
    }

    init(value,x,y) {
        this.matrix[x][y] = value;

    }

    get_array() {

        return this.matrix;
    }
}



function updateTable(myArray) {

    var result = "<table border=10>"; 


    for(var i=0; i<myArray.length; i++) {

        result += "<tr>";

        for(var j=0; j<myArray[i].length; j++){
            result += "<td>"+myArray[i][j]+"</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
}


function Click(){

    var a = new Sudoku(9,9);

    a.print(); // optional print to the console

    // Update the HTML table
    document.getElementById("thisTable").innerHTML = updateTable(a.get_array());

}

