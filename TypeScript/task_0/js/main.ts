interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Chris',
	lastName: 'Tophe',
	age: 39,
	location: 'Port-brillet',
  };
  
  const student2: Student = {
	firstName: 'Tito',
	lastName: 'Azer',
	age: 40,
	location: 'Paris',
  };

const studentsList: Array<Student> = [student1, student2];

// Render a table and append a new row for each student in studentsList
function renderStudentsTable(students: Student[]) {
	const table = document.createElement('table');
	const tbody = document.createElement('tbody');
  
	students.forEach((student) => {
	  const row = document.createElement('tr');
	  const firstNameCell = document.createElement('td');
	  const lastNameCell = document.createElement('td');
	  const locationCell = document.createElement('td');
	  const ageCell = document.createElement('td');
  
	  firstNameCell.textContent = student.firstName;
	  lastNameCell.textContent = student.lastName;
	  locationCell.textContent = student.location;
	  ageCell.textContent = student.age.toString();
  
	  row.appendChild(firstNameCell);
	  row.appendChild(lastNameCell);
	  row.appendChild(locationCell);
	  row.appendChild(ageCell);
	  tbody.appendChild(row);
	});
  
	table.appendChild(tbody);
	document.body.appendChild(table);
  }
  
  renderStudentsTable(studentsList);