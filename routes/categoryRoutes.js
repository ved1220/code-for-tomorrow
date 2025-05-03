const express= require(('express'))
const router= express.Router();
const CategoryController=require('../controllers/categoryController')
const authMiddleware= require('../middleware/authMiddleware')

router.post('/category',authMiddleware,CategoryController.createCategory);
router.get('/categories',authMiddleware,CategoryController.getALLCategories);
router.put('/category/:categoryId',authMiddleware,CategoryController.updateCategory);
router.delete('/category/:categoryId',authMiddleware,CategoryController.deleteCategory);

module.exports=router;