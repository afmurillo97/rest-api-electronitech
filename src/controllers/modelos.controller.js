import { getConnection } from "./../database/database";

const getModelos = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM modelos");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getModelo = async (req, res) =>  {
    try {
        console.log(req.body);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM modelos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addModelo = async (req, res) =>  {
    try {
        const { nombre, idMarca, descripcion } = req.body;

        if(nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'" });
        }

        const modelo = { nombre, idMarca, descripcion }
        const connection = await getConnection();
        await connection.query(`INSERT INTO modelos SET ?`, modelo)
        res.json({ message: "Modelo Añadido Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteModelo = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM modelos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateModelo = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { nombre, idMarca, descripcion } = req.body;

        if(!id || nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'"});
        };

        const modelo = { id, nombre, idMarca, descripcion };
        const connection = await getConnection();
        await connection.query(`UPDATE modelos SET ? WHERE id = ?`, [modelo, id]);
        res.json({ message: "Modelo Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getModelos,
    addModelo,
    getModelo,
    deleteModelo,
    updateModelo
};