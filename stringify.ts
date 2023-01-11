export class Stringify {
    stringify(obj: any) {
        let cache: any[] | null = [];
        let str = JSON.stringify(obj, function (key, value) {
            if (typeof value === "object" && value !== null && cache !== null) {
                if (cache !== null && cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        });
        cache = null; // reset the cache
        return str;
    }
}