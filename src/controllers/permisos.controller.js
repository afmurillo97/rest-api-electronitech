import { getConnection } from "./../database/database";

const getPermisos = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM permisos");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getPermiso = async (req, res) =>  {
    try {
        console.log(req.body);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM permisos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addPermiso = async (req, res) =>  {
    try {
        const { nombre, descripcion } = req.body;

        if(nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'" });
        }

        const permiso = { nombre, descripcion }
        const connection = await getConnection();
        await connection.query(`INSERT INTO permisos SET ?`, permiso)
        res.json({ message: "Permiso Añadido Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deletePermiso = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM permisos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updatePermiso = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        if(!id || nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'"});
        };

        const permiso = { id, nombre, descripcion };
        const connection = await getConnection();
        await connection.query(`UPDATE permisos SET ? WHERE id = ?`, [permiso, id]);
        res.json({ message: "Permiso Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getPermisos,
    addPermiso,
    getPermiso,
    deletePermiso,
    updatePermiso
};