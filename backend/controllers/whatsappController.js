import asyncHandler from 'express-async-handler';
import wbm from 'wbm'


//private, create new hotel, post /
const postWhatsappMessage = asyncHandler(async (req, res) => {
    const {message} = req.body

    wbm.start().then(async()=>{
        const phones =['+972547802245']  
        await wbm.send(phones,message)
        await wbm.end()
        res.status(201).json(message)
    }).catch(err=>{
        res.status(401)
        throw new Error(err)
    })

})



export {
    postWhatsappMessage
}