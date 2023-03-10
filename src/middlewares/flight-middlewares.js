const {ClientErrorCodes}=require('../utilis/error-codes');
const validateCreateFlight=(req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.arrivalTime||
        !req.body.departureTime ||
        !req.body.arrivalAirportId ||
        !req.body.departureAirportId ||
        !req.body.cost
    ){
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data:{},
            success:false,
            message: 'Invalid request body for create flight',
            err: 'Missing mandatory properties to create a flight'
        });
    }
    next();
}
module.exports={
    validateCreateFlight
}