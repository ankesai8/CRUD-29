export const skillOptions = [
  "JAVA",
  "C",
  "JS",
  "C++",
  "NODE JS",
  "EXPRESS",
  "MONGODB",
  "NOSQL",
  "MYSQL",
  "AWS",
  "SYSTEM DESIGN",
  "REACT",
];
export const roleOptions = [
  "PLACEMENT TEAM",
  "CODER",
  "STUDENT",
  "MENTOR",
  "COORDINATOR",
  "DEVOLOPER"
];

export const validate = (value) => {
  const errors = {};
  if (value.skill?.length < 2) errors.skill = "Select at least 2 skills";
  else if (value.role?.length <= 0) errors.role = "Please Select Role";
  return errors;
};
