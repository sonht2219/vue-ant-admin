import {DeviceType} from "@/enums/type/device";

export interface AppState {
    sidebar: {
        opened: boolean
    }
    device: DeviceType
}
