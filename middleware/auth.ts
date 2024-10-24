export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser()

  if (!user.value) {
    if(to.path != '/login') return navigateTo('/login')
  }else{
    if(to.path == '/login') return navigateTo('/')
}

})
