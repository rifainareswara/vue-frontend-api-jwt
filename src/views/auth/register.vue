<script setup lang="ts">

//import ref dan reactive dari vue
import { ref, reactive } from "vue";

//import useRouter dari vue-router
import { useRouter } from "vue-router";

//import composable useRegister
import { useRegister } from "../../composables/auth/useRegister";

//interface untuk error
interface ValidationErrors {
    [key: string]: string[];
}

//inisialisasi router
const router = useRouter();

// form state
const name = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');

// error state
const errors = reactive<ValidationErrors>({});

// custom composable
const { mutate, isPending } = useRegister();

const handleRegister = (e: Event) => {
    e.preventDefault();

    //call mutate function from useRegister
    mutate(
        {
            name: name.value,
            email: email.value,
            password: password.value,
        },
        {
            onSuccess: () => {

                //redirect to login page after success
                router.push("/login");
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

                // EMAIL DUPLICATE (409)
                if (status === 409) {
                    errors.email = [response.message];
                    return;
                }
            },
        }
    );
};
</script>

<template>
    <div class="row justify-content-center">
        <div class="col-md-4">
            <div class="card border-0 rounded-4 shadow-sm">
                <div class="card-body">
                    <h4 class="fw-bold text-center">REGISTER</h4>
                    <hr />
                    <form @submit.prevent="handleRegister">

                        <div class="form-group mb-3">
                            <label class="mb-1 fw-bold">Full Name</label>
                            <input v-model="name" type="text" class="form-control" placeholder="Full Name" />
                            <div v-if="errors.name" class="alert alert-danger mt-2 rounded-4">
                                {{ errors.name[0] }}
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label class="mb-1 fw-bold">Email address</label>
                            <input v-model="email" type="email" class="form-control" placeholder="Email Address" />
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
                            {{ isPending ? 'Loading...' : 'REGISTER' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
