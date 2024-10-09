/**
 * Function to get students ids
 *
 * @param array of students
 * @returns students if number
 */

export default function getListStudentsIds(students) {
	if (!(students instanceof Array)) {
		return [];
	}
	return students.map(student => student.id);
}
