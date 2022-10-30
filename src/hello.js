function my_print() {
    for (var i = 0; i < 5; ++i)
        console.log("i: ".concat(i));
    console.log("finally ".concat(i));
}
my_print();
