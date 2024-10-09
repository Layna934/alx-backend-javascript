/**
 * Function to fiter array based on city
 *
 * @param array of stdent
 * @returns new array
 */

export default function getStudentsByLocation(students, city) {
	if (!(students instanceof Array)) {
		return [];
	}
	return students.filter(student => student.location === city);
}
