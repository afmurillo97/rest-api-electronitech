import { getConnection } from "./../database/database";

const getEquipos = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM equipos");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getEquipo = async (req, res) =>  {
    try {
        console.log(req.body);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM equipos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addEquipo = async (req, res) =>  {
    try {
        const { idMarca, idModelo, registro, vidaUtil, documento } = req.body;

        if(nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'" });
        }

        const equipo = { idMarca, idModelo, registro, vidaUtil, documento }
        const connection = await getConnection();
        await connection.query(`INSERT INTO equipos SET ?`, equipo)
        res.json({ message: "Equipo Añadido Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteEquipo = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM equipos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateEquipo = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { idMarca, idModelo, registro, vidaUtil, documento } = req.body;

        if(!id || nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'"});
        };

        const equipo = { id, idMarca, idModelo, registro, vidaUtil, documento };
        const connection = await getConnection();
        await connection.query(`UPDATE equipos SET ? WHERE id = ?`, [equipo, id]);
        res.json({ message: "Equipo Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getEquipos,
    addEquipo,
    getEquipo,
    deleteEquipo,
    updateEquipo
};