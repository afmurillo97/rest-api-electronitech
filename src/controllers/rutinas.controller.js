import { getConnection } from "./../database/database";

const getRutinas = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM rutinas");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getRutina = async (req, res) =>  {
    try {
        console.log(req.body);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM rutinas WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addRutina = async (req, res) =>  {
    try {
        const { idCategoria, descripcion } = req.body;

        if(idCategoria === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'" });
        }

        const rutina = { idCategoria, descripcion }
        const connection = await getConnection();
        await connection.query(`INSERT INTO rutinas SET ?`, rutina)
        res.json({ message: "Rutina Añadida Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteRutina = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM rutinas WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateRutina = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { idCategoria, descripcion } = req.body;

        if(!id || idCategoria === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'"});
        };

        const rutina = { id, idCategoria, descripcion };
        const connection = await getConnection();
        await connection.query(`UPDATE rutinas SET ? WHERE id = ?`, [rutina, id]);
        res.json({ message: "Rutina Actualizada Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getRutinas,
    addRutina,
    getRutina,
    deleteRutina,
    updateRutina
};