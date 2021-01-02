export class UserModel {
    id?: string = null;
    password?: string = null;
    username?: string = null;
    access_token?: string = null;
    profile_id?: string = null;
    created_date?: number = null;

    constructor(id?: string,username?: string, password?: string, access_token?: string, created_date?: number, profile_id?: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.access_token = access_token;
        this.created_date = created_date;
        this.profile_id = profile_id;
    }
}