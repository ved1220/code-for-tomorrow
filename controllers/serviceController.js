const serviceModel= require('../models/serviceModel')
const priceOptionModel= require('../models/priceOptionModel')

exports.addService= async (req,res) => {
    const {categoryId} = req.params;
    const {name, type, priceOptions} = req.body;
    try{
        const serviceId = await serviceModel.createService(categoryId,name,type);
        await priceOptionModel.addPriceOptions(serviceId,priceOptions)
        res.status(201).json({serviceId,name,type,priceOptions})
    } catch (err){
        res.status(500).json({message:err.message})
    }
};

exports.getServices= async (req,res) => {
    const {categoryId} = req.params;
    try{
        const services = await serviceModel.getServicesByCategory(categoryId);
        for (const service of services) {
            service.priceOptions = await priceOptionModel.getPriceOptionsByservice(service.id)
        }
        res.json({services})
    } catch (err){
        res.status(500).json({message:err.message})
    }
};

exports.updateService= async (req,res) => {
    const {categoryId, serviceId} = req.params;
    const {name, type, priceOptions} = req.body;
    try{
        await serviceModel.updateService(serviceId,name,type);
        await priceOptionModel.updatePriceOptions(serviceId,priceOptions)
        res.json({message:' Service Updated'})
    } catch (err){
        res.status(500).json({message:err.message})
    }
};

exports.deleteService= async (req,res) => {
    const {serviceId} = req.params;
    try{
        await serviceModel.deleteService(serviceId);
        res.json({message:' Service Deleted'})
    } catch (err){
        res.status(500).json({message:err.message})
    }
};

