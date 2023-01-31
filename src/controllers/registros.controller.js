import { getConnection } from "./../database/database";

const getRegistros = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM registros");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getRegistro = async (req, res) =>  {
    try {
        console.log(req.body);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM registros WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addRegistro = async (req, res) =>  {
    try {
        const { nombre, tipoRegistro, documento, descripcion } = req.body;

        if(nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'" });
        }

        const registro = { nombre, tipoRegistro, documento, descripcion }
        const connection = await getConnection();
        await connection.query(`INSERT INTO registros SET ?`, registro)
        res.json({ message: "Registro Añadido Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteRegistro = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM registros WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateRegistro = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { nombre, tipoRegistro, documento, descripcion } = req.body;

        if(!id || nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'"});
        };

        const registro = { id, nombre, tipoRegistro, documento, descripcion };
        const connection = await getConnection();
        await connection.query(`UPDATE registros SET ? WHERE id = ?`, [registro, id]);
        res.json({ message: "Registro Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getRegistros,
    addRegistro,
    getRegistro,
    deleteRegistro,
    updateRegistro
};