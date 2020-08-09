<template>
    <div class="main">
        <a-form-model
                id="formLogin"
                class="layout-login"
                ref="formLogin"
                :model="form"
                :rules="rules"
        >
            <a-form-model-item prop="email">
                <a-input
                        size="large"
                        type="text"
                        placeholder="Tài khoản"
                        v-model="form.email"
                >
                    <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                </a-input>
            </a-form-model-item>

            <a-form-model-item prop="password">
                <a-input-password
                        size="large"
                        placeholder="Mật khẩu"
                        v-model="form.password"
                >
                    <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                </a-input-password>
            </a-form-model-item>

            <a-form-model-item style="margin-top:24px">
                <a-button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        class="login-button"
                        @click="onSubmit"
                >Đăng nhập
                </a-button>
            </a-form-model-item>

            <div class="login-other">
                <span>Đăng nhập với</span>
                <a>
                    <a-icon class="item-icon" type="google-square" theme="filled" :style="{ color: '#DB4437' }"></a-icon>
                </a>
                <a>
                    <a-icon class="item-icon" type="facebook" theme="filled" :style="{ color: '#3b5998' }"></a-icon>
                </a>
                <router-link class="register" :to="{ name: 'register' }">Đăng ký</router-link>
            </div>
        </a-form-model>
    </div>
</template>

<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";
    import {AuthStore} from "@/modules/auth/store";
    import {FormModel} from "ant-design-vue";

    @Component({
        name: "Login"
    })
    export default class extends Vue {
        private form = {
            email: "",
            password: ""
        };

        private rules = {
            email: [{ required: true, type: "email", message: "Nhập email", trigger: "change" }],
            password: [{ required: true, message: "Nhập mật khẩu", trigger: "change" }]
        };

        private onSubmit() {
            (this.$refs.formLogin as FormModel).validate(async (valid) => {
                if (!valid) return;
                try {
                    await AuthStore.login(this.form);
                } catch (e) {
                    console.log(e);
                }
            })
        }
    }
</script>

<style lang="less" scoped>
    .layout-login {
        label {
            font-size: 14px;
        }

        .getCaptcha {
            display: block;
            width: 100%;
            height: 40px;
        }

        .forge-password {
            font-size: 14px;
        }

        button.login-button {
            padding: 0 15px;
            font-size: 16px;
            height: 40px;
            width: 100%;
        }

        .login-other {
            text-align: left;
            margin-top: 24px;
            line-height: 22px;

            .item-icon {
                font-size: 24px;
                color: rgba(0, 0, 0, 0.2);
                margin-left: 16px;
                vertical-align: middle;
                cursor: pointer;
                transition: color 0.3s;

                &:hover {
                    color: #1890ff;
                }
            }

            .register {
                float: right;
            }
        }
    }
</style>