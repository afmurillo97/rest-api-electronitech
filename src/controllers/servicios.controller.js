import { getConnection } from "./../database/database";

const getServicios = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM servicios");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getServicio = async (req, res) =>  {
    try {
        // console.log(req.body);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM servicios WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addServicio = async (req, res) =>  {
    try {
        const { codigo, idGrupoServicio, descripcion } = req.body;

        if(codigo === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field" });
        }

        const servicio = { codigo, idGrupoServicio, descripcion }
        const connection = await getConnection();
        await connection.query(`INSERT INTO servicios SET ?`, servicio)
        res.json({ message: "Servicio Añadido Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteServicio= async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM servicios WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateServicio= async (req, res) =>  {
    try {
        const { id } = req.params;
        const { codigo, idGrupoServicio, descripcion } = req.body;

        if(!id || codigo === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field"});
        };

        const servicio = { id, codigo, idGrupoServicio, descripcion };
        const connection = await getConnection();
        await connection.query(`UPDATE servicios SET ? WHERE id = ?`, [servicio, id]);
        res.json({ message: "Servicio Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getServicios,
    addServicio,
    getServicio,
    deleteServicio,
    updateServicio
};