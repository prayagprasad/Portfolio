const dateofBirth = "12/12/1980";
const getStudentName = () => {
  return "Write your name here";
};

const getCampusName = () => {
  return "UEL Campus";
};

// Export functions and variables outside the module
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;


exports.Studentgrade = (marks) => {
  if (marks > 50 && marks < 70) return "B grade";
  else return "A grade";
};
