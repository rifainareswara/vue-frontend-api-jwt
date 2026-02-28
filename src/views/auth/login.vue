<script setup lang="ts">

//import ref dan reactive dari vue
import { ref, reactive } from 'vue';

//import useRouter dari vue-router
import { useRouter } from 'vue-router';

//import js cookie
import Cookies from 'js-cookie';

//import composable useLogin
import { useLogin } from '../../composables/auth/useLogin';

// Tipe untuk error validasi
interface ValidationErrors {
    [key: string]: string[];
}

// Router
const router = useRouter();

// Composable login
const { mutate, isPending } = useLogin();

// Form state
const email = ref<string>('');
const password = ref<string>('');

// Error state
const errors = reactive<ValidationErrors>({})

// Handle submit form
const handleLogin = (e: Event) => {
    e.preventDefault()

    //call mutasi login
    mutate(
        { email: email.value, password: password.value },
        {
            onSuccess: (data: any) => {

                //set cookie token
                Cookies.set('token', data.data.token)

                //set cookie user
                Cookies.set(
                    'user',
                    JSON.stringify({
                        id: data.data.user.id,
                        name: data.data.user.name,
                        email: data.data.user.email,
                    })
                )

                //redirect ke dashboard
                router.push('/admin/dashboard')
            },
            onError: (error: any) => {
                const response = error.response?.data;
                const status = error.response?.status;

                // reset errors dulu
                Object.keys(errors).forEach((key) => delete errors[key]);

                // VALIDATION ERROR (422)
                if (status === 422 && response?.data) {
                    Object.assign(errors, response.data);
                    return;
                }

                // LOGIN FAILED (401)
                if (status === 401) {
                    errors.email = [response.message];
                    return;
                }
            },
        }
    )
}
</script>

<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-4">
            <div class="card border-0 rounded-4 shadow-sm">
                <div class="card-body">
                    <h4 class="fw-bold text-center">LOGIN</h4>
                    <hr />
                    <form @submit="handleLogin">
                        <div class="form-group mb-3">
                            <label class="mb-1 fw-bold">Email Address</label>
                            <input v-model="email" type="text" class="form-control" placeholder="Email Address" />
                            <div v-if="errors.email" class="alert alert-danger mt-2 rounded-4">
                                {{ errors.email[0] }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label class="mb-1 fw-bold">Password</label>
                            <input v-model="password" type="password" class="form-control" placeholder="Password" />
                            <div v-if="errors.password" class="alert alert-danger mt-2 rounded-4">
                                {{ errors.password[0] }}
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary w-100 rounded-4" :disabled="isPending">
                            {{ isPending ? 'Loading...' : 'LOGIN' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
