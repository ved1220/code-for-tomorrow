const db= require('./db')

exports.addPriceOptions = async (serviceId,priceOptions) => {
    for (const option of priceOptions){
        await db.execute('INSERT INTO price_options (service_id,duration,price,type) values (?, ?, ?, ?)',[serviceId,option.duration,option.price,option.type]);
    }
};

exports.updatePriceOptions = async (serviceId,priceOptions) => {
    for (const option of priceOptions){
        await db.execute('DELETE FROM price_options WHERE service_id=?',[serviceId]);
        await this.addPriceOptions(serviceId,priceOptions)
    }
};

exports.getPriceOptionsByservice = async (serviceId) => {
    const [rows] = await db.execute('select * from price_options WHERE service_id=?',[serviceId]);
    return rows;
}