import { getConnection } from "./../database/database";

const getPermisosUsuario = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM permisos_usuarios");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getPermisoUsuario = async (req, res) =>  {
    try {
        console.log(req.body);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM permisos_usuarios WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addPermisoUsuario = async (req, res) =>  {
    try {
        const { idUsuario, idPermiso, habilitado } = req.body;

        if(nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'" });
        }

        const permisoUsuario = { idUsuario, idPermiso, habilitado }
        const connection = await getConnection();
        await connection.query(`INSERT INTO permisos_usuarios SET ?`, permisoUsuario)
        res.json({ message: "Permiso del Usuario Añadido Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deletePermisoUsuario = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM permisos_usuarios WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updatePermisoUsuario = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { idUsuario, idPermiso, habilitado } = req.body;

        if(!id || nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'"});
        };

        const permisoUsuario = { id, idUsuario, idPermiso, habilitado };
        const connection = await getConnection();
        await connection.query(`UPDATE permisos_usuarios SET ? WHERE id = ?`, [permisoUsuario, id]);
        res.json({ message: "Permiso del Usuario Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getPermisosUsuario,
    addPermisoUsuario,
    getPermisoUsuario,
    deletePermisoUsuario,
    updatePermisoUsuario
};