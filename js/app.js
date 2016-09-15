var total = 100

for (var i = 1; i < total; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
        document.write("fizz" + '</br>');
    }
    
    else if (i % 5 ==0 && i % 3 != 0) {
       document.write("buzz" + '</br>')
    }
    
    else if (i % 3 == 0 && i % 5 == 0) {
        document.write("fizz buzz" + '</br>');
    }
    else {
        document.write(i + '</br>');
    }

}
