import * as express from "express";

const router = express.Router();

router.post('/basic',
    (req:express.Request,res:express.Response,next:express.NextFunction): void => {
        res.status(200).json({
            message: "success signin/basic test !"
        })
    }
);
    
router.post('/admin');


export default router;