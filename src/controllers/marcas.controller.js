import { getConnection } from "./../database/database";

const getMarcas = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM marcas");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getMarca = async (req, res) =>  {
    try {
        console.log(req.body);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM marcas WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addMarca = async (req, res) =>  {
    try {
        const { nombre, descripcion } = req.body;

        if(nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'" });
        }

        const marca = { nombre, descripcion }
        const connection = await getConnection();
        await connection.query(`INSERT INTO marcas SET ?`, marca)
        res.json({ message: "Marca Añadida Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteMarca = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM marcas WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateMarca = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        if(!id || nombre === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'"});
        };

        const marca = { id, nombre, descripcion };
        const connection = await getConnection();
        await connection.query(`UPDATE marcas SET ? WHERE id = ?`, [marca, id]);
        res.json({ message: "Marca Actualizada Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getMarcas,
    addMarca,
    getMarca,
    deleteMarca,
    updateMarca
};