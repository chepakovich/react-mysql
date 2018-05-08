const users = require('./seed-data/users')
const assessment = require('./seed-data/assessment')
const feedback = require('./seed-data/feedback')
const mysql = require('mysql')

// Create MySQL connection
const db = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : 'root',
  port      : "3306",
  database  : 'react_node',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
}) 

// Connect to MySQL database
db.connect((err) => {
  if(err){
    throw err
  }
  console.log('MySQL database connected...')
})


// todo: implement persistence
const reviews = {}
users.forEach(u => reviews[String(u.id)] = assessment)

// todo: replace header check with auth
/*
function routes (app) {
  app.get('/users', (req, res) => {
    res.send(users)
  })
*/
function routes (app) {
  
  // Get employees
  app.get('/employees', (req, res) => {
    let sql = 'SELECT * FROM employees'
    let query = db.query(sql, (err, results) => {
      if(err) throw err
      console.log(results)
      res.send(results)
    })
  })
 
  // Edit employee
  app.post('/editemployee', (req, res) => {
    console.log('Updating employee...')
    console.log(req.body)
    let sql = `UPDATE employees SET name = '${req.body.newname}' WHERE id = ${req.body.userid}`
    let query = db.query(sql, (err, result) => {
      if(err) throw err
      console.log(result)
      res.send(result)
    })
  })

  // Insert a new employee
  app.post('/addemployee', (req, res) => {
    console.log('Inserting a new employee...')
    console.log(req.body)
    let sql = `INSERT INTO employees (adminid, name) VALUES (1, '${req.body.newname}')`
    let query = db.query(sql, (err, result) => {
      if(err) throw err
      console.log(result)
      res.send('Employee added...')
    })
  })

  // Create/edit performance review
  app.post('/performance', (req, res) => {
    console.log('Updating performance...')
    console.log(req.body)
    let sql = `INSERT INTO performreview (refid, content) VALUES(${req.body.userid}, '${req.body.content}') ON DUPLICATE KEY UPDATE content = '${req.body.content}'`
    let query = db.query(sql, (err, result) => {
      if(err) throw err
      console.log(result)
      res.send(result)
    })
  })

  // Get performance review
  console.log('Getting performance review...')
  app.get('/getperformance/:id', (req, res) => {
    let sql = `SELECT * FROM performreview WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
      if(err) throw err
      console.log(result)
      res.send(result)
    })
  })


  // Delete employee
  app.get('/deleteemployee/:id', (req, res) => {
    let sql = `DELETE FROM employees WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result) => {
      if(err) throw err
      console.log(result)
      res.send('Employee deleted...')
    })
    const userid = req.headers.userid
    res.send(feedback[userid] || [])
  })



  app.get('/reviews', (req, res) => {
    // todo: auth and err handling
    const userid = req.headers.userid
    res.send(reviews[userid])
  })
  
  app.put('/reviews', (req, res) => {
    // todo: auth and err handling
    const userid = req.headers.userid
    reviews[userid] = req.body
    res.send(reviews[userid])
  })

  app.get('/reviews/feedback', (req, res) => {
    // todo: auth and err handling
    const userid = req.headers.userid
    res.send(feedback[userid] || [])
  })

  // cleanup
  app.post('/reviews/:userid/feedback', (req, res) => {
    const targetUserid = req.params.userid
    const data = req.body
    data.from = users.find(u => u.id == data.from).name
    feedback[targetUserid].push(data)
    
    res.send(feedback[targetUserid] || [])
  })
}

module.exports = routes
