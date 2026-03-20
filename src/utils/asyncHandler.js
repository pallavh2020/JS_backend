import { response } from "express"
import { Promise } from "mongoose"


const asyncHandler =(req, res, next)=>{
    (req, res, next)=>{
        Promise.reslove(requestHandler(req, res, next)).
        catch((err)=>next(err))
    }
}


export {asyncHandler}

// const asyncHandler = (fn) => async (req,res,next)=>{
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }
