import { getConnection } from "./../database/database";

const getEcris = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM ecri");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getEcri = async (req, res) =>  {
    try {
        // console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM ecri WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addEcri = async (req, res) =>  {
    try {
        const { codigo, nombre } = req.body;

        if(nombre === undefined || codigo === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field" });
        }

        const ecri = { codigo, nombre }
        const connection = await getConnection();
        await connection.query(`INSERT INTO ecri SET ?`, ecri)
        res.json({ message: "Ecri Añadido Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteEcri = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM ecri WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateEcri = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { codigo, nombre } = req.body;

        if(!id || nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'"});
        };

        const ecri = { id, codigo, nombre };
        const connection = await getConnection();
        await connection.query(`UPDATE ecri SET ? WHERE id = ?`, [ecri, id]);
        res.json({ message: "Ecri Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getEcris,
    addEcri,
    getEcri,
    deleteEcri,
    updateEcri
};