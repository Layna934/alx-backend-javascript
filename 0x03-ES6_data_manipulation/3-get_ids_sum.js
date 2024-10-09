/**
 * Function to sum student ids
 * @param list of students
 * @returns sum result
 */

export default function getStudentIdsSum(students) {
	return students.reduce((total, student) => total + student.id, 0);
}
