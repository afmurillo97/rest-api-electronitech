import { getConnection } from "../database/database";

const getTipoVariables = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM tipovariable");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getTipoVariable = async (req, res) =>  {
    try {
        // console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM tipovariable WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addTipoVariable = async (req, res) =>  {
    try {
        const { nombre, descripcion } = req.body;

        if(nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'" });
        }

        const tipoVariable = { nombre, descripcion }
        const connection = await getConnection();
        await connection.query(`INSERT INTO tipovariable SET ?`, tipoVariable)
        res.json({ message: "Tipo de Variable Añadida Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteTipoVariable = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM tipovariable WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateTipoVariable = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        if(!id || nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field"});
        };

        const tipoVariable = { id, nombre, descripcion };
        const connection = await getConnection();
        await connection.query(`UPDATE tipovariable SET ? WHERE id = ?`, [tipoVariable, id]);
        res.json({ message: "Tipo de Variable Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getTipoVariables,
    addTipoVariable,
    getTipoVariable,
    deleteTipoVariable,
    updateTipoVariable
};