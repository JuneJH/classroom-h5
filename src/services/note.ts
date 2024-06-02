import request from './index';


export async function getNote() {
    return await request.get("/api/v1/note")
}

export async function getNoteById(id:string) {
    return await request.get("/api/v1/note-item/" + id)
}