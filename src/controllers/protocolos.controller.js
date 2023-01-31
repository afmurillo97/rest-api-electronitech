import { getConnection } from "./../database/database";

const getProtocolos = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM protocolos");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getProtocolo = async (req, res) =>  {
    try {
        console.log(req.body);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM protocolos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addProtocolo = async (req, res) =>  {
    try {
        const { nombre, descripcion } = req.body;

        if(nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'" });
        }

        const protocolo = { nombre, descripcion }
        const connection = await getConnection();
        await connection.query(`INSERT INTO protocolos SET ?`, protocolo)
        res.json({ message: "Protocolo Añadido Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteProtocolo = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM protocolos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateProtocolo = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        if(!id || nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'"});
        };

        const protocolo = { id, nombre, descripcion };
        const connection = await getConnection();
        await connection.query(`UPDATE protocolos SET ? WHERE id = ?`, [protocolo, id]);
        res.json({ message: "Protocolo Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getProtocolos,
    addProtocolo,
    getProtocolo,
    deleteProtocolo,
    updateProtocolo
};