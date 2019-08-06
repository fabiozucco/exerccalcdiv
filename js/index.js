var list = [];
var list2 = [];
var som = 0;

for (var n = 1; n < 101; n++) {
	list.push(n)
}

for (var j = 1; j < 101; j = j + 2){
	list2.push(j)
}

document.body.append("SOMA = ")

for (var i = 0; i < 50; i++){
	document.body.append(" + " + (list2[i]) + "/" + (list[i]))
	som = (list[i]/list2[i]) + som
}

document.body.append(" = " + som.toFixed(2))