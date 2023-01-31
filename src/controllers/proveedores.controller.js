import { getConnection } from "./../database/database";

const getProveedores = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM proveedores");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getProveedor = async (req, res) =>  {
    try {
        console.log(req.body);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM proveedores WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addProveedor = async (req, res) =>  {
    try {
        const { nombre, nit, representante, direccion, celular, ciudad, email, regimen } = req.body;

        if(nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'" });
        }

        const proveedor = { nombre, nit, representante, direccion, celular, ciudad, email, regimen }
        const connection = await getConnection();
        await connection.query(`INSERT INTO proveedores SET ?`, proveedor)
        res.json({ message: "Proveedor Añadido Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteProveedor = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM proveedores WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateProveedor = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { nombre, nit, representante, direccion, celular, ciudad, email, regimen } = req.body;

        if(!id || nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'"});
        };

        const proveedor = { id, nombre, nit, representante, direccion, celular, ciudad, email, regimen };
        const connection = await getConnection();
        await connection.query(`UPDATE proveedores SET ? WHERE id = ?`, [proveedor, id]);
        res.json({ message: "Proveedor Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getProveedores,
    addProveedor,
    getProveedor,
    deleteProveedor,
    updateProveedor
};