export class JSONUtil {
    static isEmpty(object: {}): boolean {
        return JSON.stringify(object) === '{}';
    }
}