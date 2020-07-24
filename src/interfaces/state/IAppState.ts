import {DeviceType} from "@/enums/type/DeviceType";

export interface IAppState {
    sidebar: {
        opened: boolean
    }
    device: DeviceType
}
