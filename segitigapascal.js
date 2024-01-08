var numberOfRows = 5;
var pascalTriangle = [];

// Membuat segitiga Pascal
for (var i = 0; i < numberOfRows; i++) {
    pascalTriangle[i] = [];
    var currentValue = 1;

    for (var j = 0; j <= i; j++) {
        pascalTriangle[i][j] = currentValue;
        currentValue = currentValue * (i - j) / (j + 1);
    }
}

// Mencetak segitiga Pascal
for (var i = 0; i < numberOfRows; i++) {
    var row = "";
    // Menambahkan spasi untuk membuat tampilan segitiga kaki sama
    for (var k = 0; k < numberOfRows - i - 1; k++) {
        row += " ";
    }
    for (var j = 0; j <= i; j++) {
        row += pascalTriangle[i][j] + " ";
    }
    console.log(row.trim());
}