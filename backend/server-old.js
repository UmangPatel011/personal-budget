const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'http://localhost/',
        user:'root',
        password: 'root',
        database: 'sample',
        port: 3306,
        connectionLimit: 5
});

app.get('/getCustomers', (req, res) => {
    pool.getConnection()
        .then(conn => {
            
            conn.query("SELECT * FROM customer")
                .then((rows) => {
                    res.json(rows);
                    conn.end();
                })
                .catch(err => {
                    console.log(err);
                    conn.end();
                })
        }).catch(err => {
            console.log(err);
        });
    
});

app.post('/getCustomersByCountry', (req, res) => {
    pool.getConnection()
        .then(conn => {
            let reqBody =  'USA';
            reqBody = req.country || 'USA';
            conn.query("SELECT * FROM customer where CUST_COUNTRY=?", reqBody)
                .then((rows) => {
                    res.json(rows);
                    conn.end();
                })
                .catch(err => {
                    console.log(err);
                    conn.end();
                })
        }).catch(err => {
            console.log(err);
        });
    
});
app.get('/getAgents', (req, res) => {
    pool.getConnection()
        .then(conn => {
            conn.query("SELECT * FROM agents")
                .then((rows) => {
                    res.json(rows);
                    conn.end();
                })
                .catch(err => {
                    console.log(err);
                    conn.end();
                })
        }).catch(err => {
            console.log(err);
        });
    
});

app.get('/getFoodList', (req, res) => {
    pool.getConnection()
        .then(conn => {
            conn.query("SELECT * FROM foods")
                .then((rows) => {
                    res.json(rows);
                    conn.end();
                })
                .catch(err => {
                    console.log(err);
                    conn.end();
                })
        }).catch(err => {
            console.log(err);
        });
    
});



app.get('/getOrders', (req, res) => {
    pool.getConnection()
        .then(conn => {
            conn.query("SELECT * FROM orders")
                .then((rows) => {
                    res.json(rows);
                    conn.end();
                })
                .catch(err => {
                    console.log(err);
                    conn.end();
                })
        }).catch(err => {
            console.log(err);
        });
    
});

app.get('/getStudents', (req, res) => {
    pool.getConnection()
        .then(conn => {
            conn.query("SELECT * FROM student")
                .then((rows) => {
                    res.json(rows);
                    conn.end();
                })
                .catch(err => {
                    console.log(err);
                    conn.end();
                })
        }).catch(err => {
            console.log(err);
        });
    
});

app.get('/getStudentreport', (req, res) => {
    pool.getConnection()
        .then(conn => {
            conn.query("SELECT * FROM studentreport")
                .then((rows) => {
                    res.json(rows);
                    conn.end();
                })
                .catch(err => {
                    console.log(err);
                    conn.end();
                })
        }).catch(err => {
            console.log(err);
        });
    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});