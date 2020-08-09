import {Action, getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import {AuthState} from "@/interfaces/state";
import store from "@/store"
import {User} from "@/interfaces/entity/user";
import {appStorage} from "@/shared/services/storage";
import {ACCESS_TOKEN} from "@/shared/constant";
import {login, register} from "@/modules/auth/service";

@Module({ dynamic: true, store, name: "auth" })
class AuthModule extends VuexModule implements AuthState {
    public token: string = appStorage.get(ACCESS_TOKEN) || "";
    public user?: User;

    @Mutation
    private SET_TOKEN(token: string) {
        this.token = token;
    }

    @Mutation
    private SET_USER(user: User) {
        this.user = user;
    }

    @Action
    public async login(dataReq: any) {
        const { data } = await login(dataReq);
        appStorage.set(ACCESS_TOKEN, data.token);
        this.SET_TOKEN(data.token);
        this.SET_USER(data.user);
    }

    @Action
    public async register(dataReq: any) {
        const { data } = await register(dataReq);
        appStorage.set(ACCESS_TOKEN, data.token);
        this.SET_TOKEN(data.token);
        this.SET_USER(data.user);
    }
}

export const AuthStore = getModule(AuthModule);