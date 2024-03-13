// Redis lưu trữ dữ liệu ở databse dưới dạng key,value và lưu trữ ở ram 

const redis = require('../utils/redis')
module.exports = class {
    static async remember(key, exprie, callback ) {
        const client = await redis;
        const cached = await client.get(key);
        if(!cached) {
            const data = await callback();
            await client.set(key, JSON.stringify(data), "EX", exprie);
            return data;
        } 
        return JSON.parse(cached)
    }
    static async rememberForever(key, callback ) {
        const client = await redis;
        const cached = await client.get(key);
        if(!cached) {
            const data = await callback();
            await client.set(key, JSON.stringify(data));
            return data;
        } 
        return JSON.parse(cached)
    }
}