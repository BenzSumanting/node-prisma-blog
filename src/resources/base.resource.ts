export abstract class BaseResource {
    abstract toJSON(): any;

    static collection<T>(items: T[], ResourceClass: any){
        return items.map(item => new ResourceClass(item).toJSON());
    }
}