import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabase = createClient(
  "https://yobswqcmjcmizxjqbgir.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
);
const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const email = ref('');
    const password = ref('');
    const user = ref(null);
    const loading = ref(false);
    const error = ref('');

    const signUp = async () => {
      loading.value = true;
      const { error: err } = await supabase.auth.signUp({ email: email.value, password: password.value });
      loading.value = false;
      if (err) error.value = err.message;
      else alert("注册成功，请检查邮箱确认！");
    };

    const signIn = async () => {
      loading.value = true;
      const { data, error: err } = await supabase.auth.signInWithPassword({ email: email.value, password: password.value });
      loading.value = false;
      if (err) error.value = err.message;
      else {
        user.value = data.user;
        localStorage.setItem('user_session', JSON.stringify(data.session));
        location.href = './app.html';
      }
    };

    onMounted(async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) location.href = './app.html';
    });

    return { email, password, signUp, signIn, error, loading };
  },
  template: `
    <div class="card">
      <h2>登录进销存系统</h2>
      <input v-model="email" placeholder="邮箱">
      <input v-model="password" type="password" placeholder="密码">
      <button @click="signIn" :disabled="loading">登录</button>
      <button @click="signUp" :disabled="loading">注册新账号</button>
      <p style="color:red;" v-if="error">{{ error }}</p>
    </div>
  `
}).mount("#app");