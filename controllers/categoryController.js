const categoryModel=require('../models/categoryModel')

exports.createCategory= async (req,res) => {
    const {name} = req.body;
    try{
        const id = await categoryModel.createCategory(name);
        res.status(201).json({id,name})
    } catch (err){
        res.status(500).json({message:err.message})
    }
};

exports.getALLCategories= async (req,res) => {
    try{
        const categories = await categoryModel.getAllCategories();
        res.json(categories)
    } catch (err){
        res.status(500).json({message:err.message})
    }
};

exports.updateCategory= async (req,res) => {
    const {categoryId} = req.params;
    const {name} = req.body
    try{
        await categoryModel.updateCategory(categoryId,name);
        res.json({message: 'category updated'})
    } catch (err){
        res.status(500).json({message:err.message})
    }
};

exports.deleteCategory= async (req,res) => {
    const {categoryId} = req.params;
    try{
        const services = await categoryModel.getCategoryServices(categoryId);
        if (services.length >0){
            return res.status(400).json({message:'Category is not empty'})
        }
        await categoryModel.deleteCategory(categoryId)
        res.json({message: 'category deleted'})
    } catch (err){
        res.status(500).json({message:err.message})
    }
};