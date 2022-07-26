const users = Employees.find();

users.map((ele) => {
  ele.salary.sort();
});
