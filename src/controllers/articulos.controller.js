import { getConnection } from "./../database/database";

const getArticulos = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM articulos");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getArticulo = async (req, res) =>  {
    try {
        console.log(req.body);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM articulos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addArticulo = async (req, res) =>  {
    try {
        const { idCliente, direccion, idServicio, serie, tipo, inventario, idTipoEquipo, idEquipo, idRegistro, ubicacion, codDoc } = req.body;

        if(nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'" });
        }

        const articulo = { idCliente, direccion, idServicio, serie, tipo, inventario, idTipoEquipo, idEquipo, idRegistro, ubicacion, codDoc }
        const connection = await getConnection();
        await connection.query(`INSERT INTO articulos SET ?`, articulo)
        res.json({ message: "Articulo Añadido Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteArticulo = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM articulos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateArticulo = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { idCliente, direccion, idServicio, serie, tipo, inventario, idTipoEquipo, idEquipo, idRegistro, ubicacion, codDoc } = req.body;

        if(!id || nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'"});
        };

        const articulo = { id, idCliente, direccion, idServicio, serie, tipo, inventario, idTipoEquipo, idEquipo, idRegistro, ubicacion, codDoc };
        const connection = await getConnection();
        await connection.query(`UPDATE articulos SET ? WHERE id = ?`, [articulo, id]);
        res.json({ message: "Articulo Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getArticulos,
    addArticulo,
    getArticulo,
    deleteArticulo,
    updateArticulo
};