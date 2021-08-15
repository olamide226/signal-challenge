const { body } = require('express-validator');


const createTicketSchema = [
    body('user_id')
        .exists()
        .withMessage('user_id is required')
        .isInt(),
    body('title')
        .exists()
        .withMessage('title is required'),
    body('tags')
        .exists()
        .isArray()
        .withMessage('Expecting an array')
        .custom((tags: string[])=>{
            if (tags.length >= 5){
                tags.map((item)=> item.toLowerCase())
                return false
            }
            return true
        })
        .withMessage('tags length must not be greater than 5')
];
export { createTicketSchema}