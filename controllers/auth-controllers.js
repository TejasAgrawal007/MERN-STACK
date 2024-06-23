const home = async (req, res) => {
    try {
            
        res
        .status(200)
        .send("Home Page")
        
    } catch (error) {
        res.status(400).send({msg : "Page Not Found"});
    }
};

const register = async (req, res) => {
    try {
        res
        .status(200)
        .send("Register Page")
    } catch (error) {
        res.status(400).send({msg : "Page Not Found"});
    }
};

module.exports = {home, register}