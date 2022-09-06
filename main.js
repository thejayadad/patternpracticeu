

for (let i = 0; i < 7; i++){
    for (let j = 0; j < 7; j ++){
        if ((j ==0 || j ==6) && i < 5 || i - j == 4 || i + j== 10 || i * j == 14){
            document.write("X")
        } else {
            document.write(" &nbsp ")
        }

    }
    document.write("<br/>")
}