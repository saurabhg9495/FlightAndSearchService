const {FlightService}=require('../services/index');
const {SuccessCodes}=require('../utilis/error-codes');

const flightService=new FlightService();

const create=async (req,res)=>{
    try {
       const flightRequestData={
            flightNumber: req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            arrivalAirportId:req.body.arrivalAirportId,
            departureAirportId:req.body.departureAirportId,
            cost:req.body.cost
        }
        const flight=await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success: true,
            err:{},
            message:'Successfully created a flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message:'Not able to create a flight',
            err: error
        });
      }
}
const getAll=async(req,res)=>{
    try {
        const response=await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success: true,
            err:{},
            message:'Successfully fetched the flights'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message:'Not able to fetch the flights',
            err: error
        });
      }
}
module.exports={
    create,
    getAll
}