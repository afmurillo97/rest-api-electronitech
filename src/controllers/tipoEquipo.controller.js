import { getConnection } from "./../database/database";

const getTipoEquipos = async (req, res) =>  {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM tipoequipo");
        // console.log(result);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const getTipoEquipo = async (req, res) =>  {
    try {
        // console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM tipoequipo WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const addTipoEquipo = async (req, res) =>  {
    try {
        const { idEcri, riesgo, idDescripcionBiomedica, idProtocolo, validacion } = req.body;

        if(idEcri === undefined){
            res.status(400).json({ message: "Bad Request. Please fill a field" });
        }

        const tipoEquipo = { idEcri, riesgo, idDescripcionBiomedica, idProtocolo, validacion }
        const connection = await getConnection();
        await connection.query(`INSERT INTO tipoequipo SET ?`, tipoEquipo)
        res.json({ message: "TipoEquipo Añadido Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const deleteTipoEquipo = async (req, res) =>  {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM tipoequipo WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

const updateTipoEquipo = async (req, res) =>  {
    try {
        const { id } = req.params;
        const { idEcri, riesgo, idDescripcionBiomedica, idProtocolo, validacion } = req.body;

        if(!id || !idEcri || !idDescripcionBiomedica || !idProtocolo){
            res.status(400).json({ message: "Bad Request. Please fill a field 'name'"});
        };

        const tipoEquipo = { id,  idEcri, riesgo, idDescripcionBiomedica, idProtocolo, validacion };
        const connection = await getConnection();
        await connection.query(`UPDATE tipoequipo SET ? WHERE id = ?`, [tipoEquipo, id]);
        res.json({ message: "TipoEquipo Actualizado Exitosamente!!" });
    } catch (error) {
        // Error(500): Server Error
        res.status(500);
        res.send(error.message);
    }  
};

export const methods = {
    getTipoEquipos,
    addTipoEquipo,
    getTipoEquipo,
    deleteTipoEquipo,
    updateTipoEquipo
};