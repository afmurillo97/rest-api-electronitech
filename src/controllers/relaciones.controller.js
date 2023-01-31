import { getConnection } from "./../database/database";

const getRelaciones = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM relaciones");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getRelacion = async (req, res) =>  {
    try {
        console.log(req.body);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM relaciones WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addRelacion = async (req, res) =>  {
    try {
        const { modulo, pestana, nombre, valores, idPrincipal } = req.body;

        if(nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field" });
        }

        const relacion = { modulo, pestana, nombre, valores, idPrincipal }
        const connection = await getConnection();
        await connection.query(`INSERT INTO relaciones SET ?`, relacion)
        res.json({ message: "Relacion Añadida Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteRelacion = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM relaciones WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateRelacion = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { modulo, pestana, nombre, valores, idPrincipal } = req.body;

        if(!id || nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field"});
        };

        const relacion = { id, modulo, pestana, nombre, valores, idPrincipal };
        const connection = await getConnection();
        await connection.query(`UPDATE relaciones SET ? WHERE id = ?`, [relacion, id]);
        res.json({ message: "Relacion Actualizada Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getRelaciones,
    addRelacion,
    getRelacion,
    deleteRelacion,
    updateRelacion
};