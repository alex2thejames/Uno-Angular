const controller = require('../controllers/controller');
const path = require('path');

module.exports = app => {
    app.get('/api/users', controller.allUsers);
    app.get('/api/users/:id', controller.oneUser);
    app.post('/api/users', controller.createUser);
    app.put('/api/users/:id', controller.editUser);
    app.delete('/api/users/:id', controller.deleteUser);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
}


// register: (req,res)=>{
//     Pet.create(req.body)
//     .then(data => {
//         res.json({ message: "success", results: data});

//     })
//     .catch(err => {
//         res.json({ message: "error", results: err });
//     })
// },
// findUser: (req,res) => {
//     User.findOne({email: req.body.email})
//     .then(data => {
//         res.json({ message: "success", results: data });

//     })
//     .catch(err => {
//         res.json({ message: "error", results: err });
//     })
//     },