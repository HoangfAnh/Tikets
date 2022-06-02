import db from "../firebase/config";


export type Todo = {
    id?: string;
    BookingCode: string;
    TenSuKien: string;
    CongCheckIn: string;
    NgaySuDung: any;
    NgayXuatVe:any;
    TenLoaiVe:string;
    DoiSoat:string;
    TinhTrang:string;
};

export const all = async (): Promise<Array<Todo>> => {
    const snapshot = await db.collection("Booking").get();
    const data: Array<any> = [];

    snapshot.docs.map((_data) => {
        data.push({
            id: _data.id, 
            ..._data.data(), 
        });
    });

    return data as Array<Todo>;
};

export const create = async (todo: Todo): Promise<Todo> => {
    const docRef = await db.collection("Booking").add(todo);

    return {
        id: docRef.id,
        ...todo,
    } as Todo;
};

export const update = async (id: string, todo: Todo): Promise<Todo> => {
    await db.collection("Booking").doc(id).update(todo);
    return {
        id: id,
        ...todo,
    } as Todo;
};

export const remove = async (id: string) => {
    await db.collection("Booking").doc(id).delete();
};