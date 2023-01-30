import { getConnection } from "./../database/database";

const getManifiestos = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM manifiestos");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getManifiesto = async (req, res) =>  {
    try {
        // console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM manifiestos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addtManifiesto = async (req, res) =>  {
    try {
        const { nombre, documento, descripcion } = req.body;

        if(nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'" });
        }

        const manifiesto = { nombre, documento, descripcion }
        const connection = await getConnection();
        await connection.query(`INSERT INTO manifiestos SET ?`, manifiesto)
        res.json({ message: "Manifiesto Añadido Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteManifiesto = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM manifiestos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateManifiesto = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { nombre, documento, descripcion } = req.body;

        if(!id || nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'"});
        };

        const manifiesto = { id, nombre, documento, descripcion };
        const connection = await getConnection();
        await connection.query(`UPDATE manifiestos SET ? WHERE id = ?`, [manifiesto, id]);
        res.json({ message: "Manifiesto Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getManifiestos,
    addtManifiesto,
    getManifiesto,
    deleteManifiesto,
    updateManifiesto
};