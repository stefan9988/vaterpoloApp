import { Connection, Request } from "tedious";

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "v-admin", // update me
      password: "VaterpoloApp2022" // update me
    },
    type: "default"
  },
  server: "srv-vaterpolo.database.windows.net", // update me
  options: {
    database: "db-vaterpolo", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

connection.connect();

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT * from dbo.Igrac`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
        
      }connection.close()
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
      
    });
  });

  connection.execSql(request);
  
}
