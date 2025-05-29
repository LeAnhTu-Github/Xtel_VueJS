// 2. Bài tập về nested objects
const company = {
  departments: [
    {
      name: "Engineering",
      employees: [
        {
          id: 1,
          name: "John",
          salary: 50000,
          projects: ["Project A", "Project B"],
        },
        { id: 2, name: "Jane", salary: 60000, projects: ["Project B"] },
        { id: 3, name: "Bob", salary: 55000, projects: ["Project C"] },
      ],
    },
    {
      name: "Marketing",
      employees: [
        { id: 4, name: "Sarah", salary: 45000, projects: ["Campaign A"] },
        { id: 5, name: "Mike", salary: 48000, projects: ["Campaign B"] },
      ],
    },
  ],
};

// 2.1 Tìm tất cả nhân viên làm việc trên Project B
function findEmployeesByProject(company, projectName) {
  // Return array của employees làm việc trên project cụ thể
  return company.departments.flatMap((dept) =>
    dept.employees.filter((emp) => emp.projects.includes(projectName))
  );
}
// console.log(
//   "Find Employees by Project: ",
//   findEmployeesByProject(company, "Campaign B")
// );

// 2.2 Tính tổng lương theo từng department
function calculateDepartmentSalaries(company) {
  return company.departments.reduce((acc, dept) => {
    if (!acc[dept.name]) {
      acc[dept.name] = 0;
    }
    acc[dept.name] += dept.employees.reduce((acc, val) => acc + val.salary, 0);
    return acc;
  }, {});
  // Output: { Engineering: 165000, Marketing: 93000 }
}

console.log("Department Salary: ", calculateDepartmentSalaries(company));
