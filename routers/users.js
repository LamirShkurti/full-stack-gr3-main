const router = require('express').Router();
const {getUsers, createUser, getAllUsers, getUserByName, createManyUser, updateUserById, DeleteUserById} = require('../controllers/users');

const validateData = require('../middlewares/validateData')

// router.post('/', createUser);               //C
router.post('/', createManyUser);

router.get('/', getAllUsers);                  //R
router.get('/:name', getUserByName);  
// router.put('/:id', updateUser);          //U


router.put('/:id', updateUserById);

router.delete('/:id', DeleteUserById);


// router.delete('/:id', deleteUser);       //D

module.exports = router