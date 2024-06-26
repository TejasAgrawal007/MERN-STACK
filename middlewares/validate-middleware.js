//  await schema.parseAsync(req.body) is the line where you use zod and validate the req body data against the different schema.


const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const message = err.errors[0].message;
        console.log(err);
        res.status(400).json({msg : message})
    }
}

module.exports = validate;