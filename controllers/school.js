const db=require("../config/db")
//GET ALL STUDENTS LIST
const getSchool=async(req,res)=>{
    try {
        const data=await db.query("SELECT * FROM schools")
        if(!data){
            return res.status(404).json("data not found")
        }
        res.status(200).json({massage:"data found",data:data[0]})
    } catch (error) {
    console.log(error)
    res.status(500).json({massage:error})    
    }
}

//CREATE STUDENTS || POST
const createSchool=async(req,res)=>{
    try {
        const {id,name, address, latitude, longitude } = req.body;
        if (!id||!name || !address || !latitude || !longitude) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const [data] =await db.query(`INSERT INTO schools (id,name, address, latitude, longitude) VALUES (?, ?, ?, ?,?)`,[id,name, address, latitude, longitude]) ;
        res.status(200).json({massage:"Data saved"})
    } catch (error) {
        console.log(error)
        return res.status(500).json("error!!")
    }
}


module.exports={getSchool,createSchool}