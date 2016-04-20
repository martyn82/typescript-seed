
interface Item {
    id(): number
}

export class Other {
    public static find(id: number): Array<Item> {
        let db: Array<Item> = [];
        return db.filter((t: Item) => {
            return t.id() === id;
        });
    }
}
