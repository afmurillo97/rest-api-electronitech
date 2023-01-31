import { getConnection } from "./../database/database";

const getFabricantes = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM fabricantes");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getFabricante = async (req, res) =>  {
    try {
        console.log(req.body);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM fabricantes WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addFabricante = async (req, res) =>  {
    try {
        const { nombre, celular, direccion, ciudad, email } = req.body;

        if(nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'" });
        }

        const fabricante = { nombre, celular, direccion, ciudad, email }
        const connection = await getConnection();
        await connection.query(`INSERT INTO fabricantes SET ?`, fabricante)
        res.json({ message: "Fabricante Añadido Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteFabricante = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM fabricantes WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateFabricante = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { nombre, celular, direccion, ciudad, email } = req.body;

        if(!id || nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'"});
        };

        const fabricante = { id, nombre, celular, direccion, ciudad, email };
        const connection = await getConnection();
        await connection.query(`UPDATE fabricantes SET ? WHERE id = ?`, [fabricante, id]);
        res.json({ message: "Fabricante Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getFabricantes,
    addFabricante,
    getFabricante,
    deleteFabricante,
    updateFabricante
};