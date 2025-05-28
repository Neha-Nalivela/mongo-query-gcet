gcet> db.employees.insertOne({
...   name: "John Smith",
...   email: "john@gmail.com",
...   department: "IT",
...   salary: 1456,
...   location: ["FL", "OH"],
...   date: Date(),
... });
{
  acknowledged: true,
  insertedId: ObjectId('683726bdc77050b3a8fa4214')
}
gcet> db.employees.insertMany([
...   {
...     name: "Mike Joseph",
...     email: "mike@gmail.com",
...     department: "IT",
...     salary: 2456,
...     location: ["FL", "TX"],
...     date: Date(),
...   },
...   {
...     name: "Cathy G",
...     email: "cathy@gmail.com",
...     department: "IT",
...     salary: 3456,
...     location: ["AZ", "TX"],
...     date: Date(),
...   },
... ]);
...
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('683726cbc77050b3a8fa4215'),
    '1': ObjectId('683726cbc77050b3a8fa4216')
  }
}
gcet> db.employees.find();
[
  {
    _id: ObjectId('683726bdc77050b3a8fa4214'),
    name: 'John Smith',
    email: 'john@gmail.com',
    department: 'IT',
    salary: 1456,
    location: [ 'FL', 'OH' ],
    date: 'Wed May 28 2025 20:37:41 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId('683726cbc77050b3a8fa4215'),
    name: 'Mike Joseph',
    email: 'mike@gmail.com',
    department: 'IT',
    salary: 2456,
    location: [ 'FL', 'TX' ],
    date: 'Wed May 28 2025 20:37:55 GMT+0530 (India Standard Time)'
  },
  {
    _id: ObjectId('683726cbc77050b3a8fa4216'),
    name: 'Cathy G',
    email: 'cathy@gmail.com',
    department: 'IT',
    salary: 3456,
    location: [ 'AZ', 'TX' ],
    date: 'Wed May 28 2025 20:37:55 GMT+0530 (India Standard Time)'
  }
]