function markStudents (mark) {

	// if (mark >=0 && mark < 3) {
	// 	return "Muy deficiente";
	// }
	// else if (mark < 5) {
	// 	return "Insuficiente";
	// }
	// else if (mark < 6) {
	// 	return "Suficiente";
	// }
	// else if (mark < 7) {
	// 	return "Bien";
	// }
	// else if (mark < 9) {
	// 	return "Notable"; 
	// }
	// else if (mark >= 9) {
	// 	return "Sobresaliente";
	// }

	if (mark >=0 && mark <=10) {

		return mark >= 9 ? "Sobresaliente" :
		mark < 9 && mark >= 7 ? "Notable" :
		mark < 7 && mark >= 6 ? "Bien" :
		mark < 6 && mark >= 5 ? "Suficiente" :
		mark < 5 && mark >= 3 ? "Insuficiente" :
		 "Muy deficiente" 
	} 

	return "Esa nota no existe, introduce un valor entre 0-10"
}

module.exports = markStudents;