const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const database = require('../database')

const getUsers = (req,res)=>{
    console.log(req.body)
    res.send('Hello World!')
}


const createKomuna = (req, res) => {
      console.log(req.body)
      const emri = req.body.emri;
      const pershkrimi = req.body.pershkrimi;
      console.log(emri, pershkrimi)
      database.query(`INSERT INTO komunat (Emri, Pershkrimi) VALUES ('${req.body.emri}', '${pershkrimi}')`, (err, results) => {
        if (err) throw err;
        res.send(`Komuna ${emri} u insertua ne databaze`);
      });
    
}

const createUser = async(req,res)=>{
  const emri = req.body.emri
  const email = req.body.email
  const user = await prisma.user.create({data:{email,name:emri}})
  res.json(user)
}

const getAllUsers = async(req, res)=>{
  const users = await prisma.user.findMany();
  res.json(users);
}

const getUserByName = async(req, res)=>{
  const emri = req.params.name
  const users = await prisma.user.findMany({
    where:{
      name:emri
    }
  });
  res.json(users);
}

const createManyUser = async(req, res)=>{
  const dat = req.body
  const users = await prisma.user.createMany({
    data:dat
    
  });
  res.json(users);
}
const updateUserById  = async(req, res)=>{
    const id =  parseInt(req.params.id);
    const emri = req.body.emri;
    const email = req.body.email;
    const update = await prisma.user.update({
      where:{
        id
      },
      data: {
        name: emri,
        email: email
      },
    })
    res.json(update)
  }

const DeleteUserById = async(req,res)=>{
  const id = parseInt(req.params.id)
  const deleteUser = await prisma.user.delete({
    where: {
      id: id,
    },
  })
  res.json(deleteUser)
}

module.exports = {getUsers,createKomuna,createUser, getAllUsers, getUserByName, createManyUser, updateUserById, DeleteUserById}
