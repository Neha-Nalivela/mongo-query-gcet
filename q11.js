//1st
db.employees.aggregate([
    { $project: { name: 1, email: 1, salary:1 } },
    {$sort:{salary:-1}},
    {$limit:3}
]);
//2nd
db.employees.aggregate([
  { $project: { name: 1, email: 1,salary:1 } },
  { $addFields: { AnnualSalary: { $multiply: ["$salary", 12] } } },
]);
//3rd
db.employees.aggregate([
  {
    $project: {
      name: 1,
      age: 1,
      grade: {
        $cond: {
          if: { $gt: ["$age", 40] },
          then: "Band A", 
          else: "Band B",},
      },
    },
  },
]);