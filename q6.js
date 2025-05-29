db.employees.updateOne({ email: "john@gmail.com" }, { $set: { email: "john@outlook.com" } });
db.employees.find().sort({ salary: -1 }).limit(3); 
db.employees.updateMany({}, { $inc: { salary: 1000 } });
db.employees.insertOne({
  name: "Anjali",
  email: "anjali@gmail.com",
  department: "Admin",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date(),
});
db.employees.deleteMany({ department: "Admin" });