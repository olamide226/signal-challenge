import { Request, Response, NextFunction } from 'express';
import {validationResult} from 'express-validator';
import axios from 'axios';
import  { createTicket, createTags, getHighestTag }  from '../models/index.model';
import HttpException from '../utils/HttpException.utils';

// function checkValidation (req: Request, res) {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         const err =  new HttpException(422, 'Validation failed', errors);
//         next(err)
//     }
// }

export async function defaultController(req: Request, res: Response, next:NextFunction) {
    // checkValidation(req);
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const err =  new HttpException(422, 'Validation failed', errors);
        return next(err)
        // throw err;
    }

    //save ticket to the DB
    let result = await createTicket(req.body.user_id, req.body.title)
    .catch(err =>{
        throw new HttpException(500, err.message)
    });

    //save tags to DB if not empty
    if(req.body.tags.length){
        await createTags(result[0], req.body.tags)
    }
    let tag = await getHighestTag()
    let webhook_url = "https://webhook.site/7fdde03a-a888-4567-af36-2c6a4f795efc?";
    await axios.get(`${webhook_url}highest_count_tag=${JSON.stringify(tag.tag)}`)
            .catch(err => {
                console.log('Error: ', err.message);
            });

    return res.send({type: 'success'});
}

