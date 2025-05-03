const db= require('./db')

exports.createService = async (category_id,name,type) => {
    const [result] = await db.execute('INSERT INTO services (category_id,name,type) values (?, ?, ?)',[category_id,name,type]);
    return result.insertId;
};

exports.getServicesByCategory = async (category_id) => {
    const [rows] = await db.execute('select * from services WHERE category_id=?',[category_id]);
    return rows;
}

exports.updateService = async (serviceId,name,type) => {
    await db.execute('UPDATE services SET name=?,type=? WHERE id=?',[name,type,serviceId]);
}

exports.deleteService = async (serviceId) => {
    const [result]= await db.execute('DELETE FROM services WHERE id=?',[serviceId]);
    return result
}
