import createEmployeesObjec from './11-createEmployeesObject.js'

export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(this.allEmployees).length;
    },
  };
}
