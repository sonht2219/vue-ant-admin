import {Action, getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from "../index"
import {IAppState} from "@/interfaces/state";
import {DeviceType} from "@/enums/type";

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
    public sidebar = {
        opened: true
    };

    public device = DeviceType.Desktop;

    @Mutation
    private TOGGLE_SIDEBAR() {
        this.sidebar.opened = !this.sidebar.opened;
    }

    @Mutation
    private OPEN_SIDEBAR() {
        this.sidebar.opened = true;
    }

    @Mutation
    private CLOSE_SIDEBAR() {
        this.sidebar.opened = false;
    }

    @Mutation
    private TOGGLE_DEVICE(device: DeviceType) {
        this.device = device;
    }

    @Action
    public ToggleSidebar() {
        this.TOGGLE_SIDEBAR();
    }

    @Action
    public OpenSidebar() {
        this.OPEN_SIDEBAR();
    }

    @Action
    public CloseSidebar() {
        this.CLOSE_SIDEBAR();
    }

    @Action
    public ToggleDevice(device: DeviceType) {
        this.TOGGLE_DEVICE(device);
    }
}

export const AppModule = getModule(App);
