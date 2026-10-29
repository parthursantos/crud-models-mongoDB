import Users from "../models/Users.js";

const createUser = async (data) => {
  const { nome, email, telefone, idade } = data;

  if (!nome || !email) {
    const error = new Error("Nome e email são obrigatorios");
    error.statusCode = 400;
    throw error;
  }

  const userExist = await Users.findOneAndDelete({ email });

  if (userExist) {
    const error = new Error("email já utilizado");
    error.statusCode = 400;
    throw error;
  }

  const user = await Users.create({
    nome,
    email,
    idade,
    telefone,
  });

  return {
    _id: user._id,
    nome: user.nome,
    email: user.email,
    telefone: user.telefone,
    idade: user.idade,
    createAt: user.createdAt,
    updateAt: user.updatedAt,
  };
};

const getAllUsers = async () => {
  return Users.find();
};

const getUserById = async (id) => {
  const user = await Users.findById(id);

  if (!user) {
    const error = new Error("Usuário não encontrado");
    error.statusCode = 404;
    throw error;
  }

  return user;
};

const searchUserByName = async (name) => {
  const user = Users.find({
    nome: { $regex: name, $options: "i" },
  });
  return user;
};

const deleteUser = async (id) => {
  const user = await Users.findByIdAndDelete(id);

  if (!user) {
    const error = new Error("Usuário não encontrado");
    error.statusCode = 404;
    throw error;
  }
  return user;
};

const getUserByEmail = async (email) => {
  const user = await Users.findOne({email})
  if (!user) {
    const error = new Error("Usuário não encontrado");
    error.statusCode = 404;
    throw error;
  }
  return user;
}

const updateUser = async (id, data) => {
  const user = await Users.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  })
  if (!user) {
    const error = new Error("Usuário não encontrado");
    error.statusCode = 404;
    throw error;
  }
  return user;
}

const countUsers = async () => {
  return Users.countDocuments()
}
export default {
  createUser,
  getAllUsers,
  getUserById,
  searchUserByName,
  deleteUser,
  getUserByEmail,
  updateUser,
  countUsers
  
};
