const db= require('./db')

exports.createCategory = async (name) => {
    const [result] = await db.execute('INSERT INTO categories (name) values (?)',[name]);
    return result.insertId;
};

exports.getAllCategories = async () => {
    const [rows] = await db.execute('select * from categories');
    return rows;
}

exports.updateCategory = async (id,name) => {
    await db.execute('UPDATE categories SET name=? WHERE id=?',[name,id]);
}

exports.deleteCategory = async (id) => {
    const [result] = await db.execute('DELETE FROM categories WHERE id=?',[id]);
    return result.insertId;
}

exports.getCategoryServices = async (id) => {
    const [rows] = await db.execute('SELECT * FROM services WHERE category_id=?',[id]);
    return rows;
    
}