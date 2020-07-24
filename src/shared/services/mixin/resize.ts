import {Component, Vue, Watch} from "vue-property-decorator";
import {AppModule} from "@/store/modules/app";
import {DeviceType} from "@/enums/type";

const WIDTH_TABLET = 992;
const WIDTH_MOBILE = 768;

@Component({
    name: 'ResizeMixin'
})
export default class extends Vue {

    get sidebar() {
        return AppModule.sidebar;
    }

    get _device() {
        return AppModule.device;
    }

    @Watch('$route')
    private onRouteChange() {
        if (this._device !== DeviceType.Desktop && this.sidebar.opened) {
            AppModule.CloseSidebar();
        }
    }

    beforeMount() {
        window.addEventListener('resize', this.resizeHandler);
    }

    mounted() {
        const device = this.getDevice();
        if (device !== DeviceType.Desktop) {
            AppModule.ToggleDevice(device);
            AppModule.CloseSidebar();
        }
    }

    beforeDestroy() {
        window.removeEventListener('resize', this.resizeHandler);
    }

    private isTablet(rectWidth: number): boolean {
        return rectWidth > WIDTH_MOBILE && rectWidth - 1 < WIDTH_TABLET;
    }

    private isMobile(rectWidth: number): boolean {
        return rectWidth - 1 < WIDTH_MOBILE;
    }

    private getDevice(): DeviceType {
        const rect = document.body.getBoundingClientRect();
        if(this.isTablet(rect.width)) {
            return DeviceType.Tablet;
        } else if (this.isMobile(rect.width)) {
            return DeviceType.Mobile;
        } else {
            return DeviceType.Desktop;
        }
    }

    private resizeHandler() {
        if (!document.hidden) {
            const device = this.getDevice();
            AppModule.ToggleDevice(device);
            if (device !== DeviceType.Desktop) {
                AppModule.CloseSidebar();
            } else {
                AppModule.OpenSidebar();
            }
        }
    }
}
