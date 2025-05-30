db.orders.insertMany([
    {
        empid: ObjectId('68386989e5ee83b52ffa4218'),
        items:{1:3,3:2},
        orderValue: 454,
        status:"pending",
    },
    {
        empid: ObjectId('683726cbc77050b3a8fa4216'),
        items:{3:1,1:3},
        orderValue: 876,
        status:"pending",   
    }
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empid",
      as: "orders",
    },
  },
]);