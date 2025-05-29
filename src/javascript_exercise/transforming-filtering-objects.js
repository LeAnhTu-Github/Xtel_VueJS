const students = [
  { id: 1, name: "Alice", grades: [85, 90, 92], department: "CS" },
  { id: 2, name: "Bob", grades: [75, 80, 85], department: "Math" },
  { id: 3, name: "Carol", grades: [90, 95, 89], department: "CS" },
  { id: 4, name: "Dave", grades: [88, 88, 90], department: "Math" },
  { id: 5, name: "Eve", grades: [95, 89, 96], department: "CS" },
];

// 1.1 Tính điểm trung bình cho mỗi sinh viên và thêm vào object
function addAverageGrades(students) {
  // Output mong muốn: Thêm averageGrade vào mỗi student
  return students.map((student) => {
    const average =
      student.grades.reduce((sum, grade) => sum + grade, 0) /
      student.grades.length;
    return { ...student, averageGrade: average };
  });
}
// console.log("Average Grades: ", addAverageGrades(students));

// 1.2 Nhóm sinh viên theo department và tính điểm trung bình của từng department
function groupByDepartment(students) {
  const stats = students.reduce((acc, student) => {
    const avg =
      student.grades.reduce((sum, grade) => sum + grade, 0) /
      student.grades.length;
    acc[student.department] = acc[student.department] ?? { total: 0, count: 0 };
    acc[student.department].total += avg;
    acc[student.department].count += 1;
    return acc;
  }, {});
  return Object.fromEntries(
    Object.entries(stats).map(([department, { total, count }]) => [
      department,
      parseFloat((total / count).toFixed(1)),
    ])
  );
  // Output: { CS: 90.5, Math: 84.3 }
}
// console.log("Everage Group by Department: ", groupByDepartment(students));

// 1.3 Tìm top 3 sinh viên có điểm trung bình cao nhất
function findTopStudents(students, n = 3) {
  // Return array của top n students với averageGrade
  const ranking = students.map((student) => {
    const average =
      student.grades.reduce((sum, grade) => sum + grade, 0) /
      student.grades.length;
    return { ...student, averageGrade: average };
  });
  ranking.sort((a, b) => b.averageGrade - a.averageGrade);
  return ranking.slice(0, n);
}

console.log("Find Top 3 Student", findTopStudents(students));
