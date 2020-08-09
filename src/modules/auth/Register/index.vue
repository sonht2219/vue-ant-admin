<template>
    <div class="main layout-register">
        <h3><span>Đăng ký</span></h3>
        <a-form ref="formRegister" id="formRegister">
            <a-form-item>
                <a-input
                        size="large"
                        type="text"
                        placeholder="Email"
                ></a-input>
            </a-form-item>

            <a-form-item>
                <a-input-password
                        size="large"
                        placeholder="Mật khẩu"
                ></a-input-password>
            </a-form-item>

            <a-form-item>
                <a-input-password
                        size="large"
                        placeholder="Xác nhận mật khẩu"
                ></a-input-password>
            </a-form-item>

            <a-form-item>
                <a-input size="large" placeholder="Số điện thoại">
                    <a-select slot="addonBefore" size="large" defaultValue="+86">
                        <a-select-option value="+86">+84</a-select-option>
                    </a-select>
                </a-input>
            </a-form-item>

            <a-form-item>
                <a-button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        class="register-button">
                    Đăng ký
                </a-button>
                <router-link class="login" :to="{ name: 'login' }">Đăng nhập</router-link>
            </a-form-item>

        </a-form>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: "Register"
    })
    export default class extends Vue {

    }
</script>

<style lang="less" scoped>
.layout-register {

        & > h3 {
            font-size: 16px;
            margin-bottom: 20px;
        }

        .getCaptcha {
            display: block;
            width: 100%;
            height: 40px;
        }

        .register-button {
            width: 50%;
        }

        .login {
            float: right;
            line-height: 40px;
        }
    }
</style>