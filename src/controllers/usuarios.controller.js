import { getConnection } from "./../database/database";

const getUsuarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios");
        // console.log(result);
        res.json(result)
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }
};

const getUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios WHERE id = ?", id);
        // console.log(result);
        res.json(result)
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }
};

const addUsuario = async (req, res) => {
    try {
        const { nombres, apellidos, identificacion, username, password, email, cargo, celular, firmaDigital } = req.body;

        if(!username || !password ){
            res.status(400).json({ message: "Bad Request. Please fill all fields" });
        };

        const usuario = { nombres, apellidos, identificacion, username, password, email, cargo, celular, firmaDigital };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO usuarios SET ?", usuario);
        // console.log(result);
        res.json(result);
        res.json({ message: "Usuario Añadido Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }
};

const deleteUsuario = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuarios WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateUsuario = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { nombres, apellidos, identificacion, username, password, email, cargo, celular, firmaDigital } = req.body;

        if(!id){
            res.status(400).json({ message: `Bad Request. this id: ${id} isn't in db`});
        };

        const usuario = { id, nombres, apellidos, identificacion, username, password, email, cargo, celular, firmaDigital };
        const connection = await getConnection();
        await connection.query(`UPDATE usuarios SET ? WHERE id = ?`, [usuario, id]);
        res.json({ message: "Usuario Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getUsuarios,
    getUsuario,
    addUsuario,
    deleteUsuario,
    updateUsuario,
};
