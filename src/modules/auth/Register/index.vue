<template>
    <div class="main layout-register">
        <h3><span>Đăng ký</span></h3>
        <a-form-model ref="formRegister"
                      id="formRegister"
                      :model="form"
                      :rules="rules"
        >
            <a-form-model-item prop="email" has-feedback>
                <a-input
                        size="large"
                        type="text"
                        placeholder="Email"
                        v-model="form.email"
                ></a-input>
            </a-form-model-item>

            <a-form-model-item prop="phoneNumber" has-feedback>
                <a-input size="large"
                         placeholder="Số điện thoại"
                         v-model="form.phoneNumber"
                ></a-input>
            </a-form-model-item>

            <a-form-model-item prop="password" has-feedback>
                <a-input-password
                        size="large"
                        placeholder="Mật khẩu"
                        v-model="form.password"
                ></a-input-password>
            </a-form-model-item>

            <a-form-model-item prop="passwordConfirm" has-feedback>
                <a-input-password
                        size="large"
                        placeholder="Xác nhận mật khẩu"
                        v-model="form.passwordConfirm"
                ></a-input-password>
            </a-form-model-item>

            <a-form-model-item>
                <a-button
                        size="large"
                        type="primary"
                        class="register-button"
                        @click="onSubmit"
                >
                    Đăng ký
                </a-button>
                <router-link class="login" :to="{ name: 'login' }">Đăng nhập</router-link>
            </a-form-model-item>

        </a-form-model>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {FormModel} from "ant-design-vue";
    import {PHONE_REGEX} from "@/shared/constant";
    import {register} from "@/modules/auth/service";

    @Component({
        name: "Register"
    })
    export default class extends Vue {
        private form = {
            email: "",
            phoneNumber: "",
            password: "",
            passwordConfirm: ""
        };

        private rules = {
            email: [{ required: true, type: "email", message: "Nhập email", trigger: "change" }],
            phoneNumber: [
                { required: true, message: "Nhập số điện thoại", trigger: "change" },
                { pattern: new RegExp(PHONE_REGEX), message: "Số điện thoại không hợp lệ", trigger: "blur" }
            ],
            password: [{ required: true, validator: this.passwordValidator, trigger: "change"}],
            passwordConfirm: [{ required: true, validator: this.passwordConfirmValidator, trigger: "change"}]
        };

        private passwordValidator(rule: any, value: any, callback: Function) {
            if (value === "") {
                callback(new Error("Nhập mật khẩu"));
            } else {
                if (this.form.passwordConfirm !== "") {
                    (this.$refs.formRegister as FormModel).validateField("passwordConfirm", () => 1);
                }
                callback();
            }
        }

        private passwordConfirmValidator(rule: any, value: any, callback: Function) {
            if (value === "") {
                callback(new Error("Nhập lại mật khẩu"));
            } else if (value !== this.form.password) {
                callback(new Error("Mật khẩu không khớp"));
            } else {
                callback();
            }
        }

        private onSubmit() {
            (this.$refs.formRegister as FormModel).validate(async valid => {
                if (!valid) return;
                try {
                    await register(this.form);
                } catch (e) {
                    console.log(e);
                }
            })
        }
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