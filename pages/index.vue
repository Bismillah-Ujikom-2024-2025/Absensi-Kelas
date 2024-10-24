<template>
  <div>
    <button @click="logout">logout</button>
    <h1>hello, {{ user }}</h1>
  </div>
</template>


<script setup>
let supabase= useSupabaseClient()
let user = useSupabaseUser()

async function logout() {
  let { error } = await supabase.auth.signOut()
  if(!error) navigateTo('/login')
}
</script>