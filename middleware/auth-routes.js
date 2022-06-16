export default async function ({ window, app, store, redirect, route }) {
  // const isUserSignedIn = store.state.auth.loggedIn
  const isUserSignedIn = false
  const authRoutes = store.state.authRoutes

  if (!isUserSignedIn && authRoutes.includes(route.path)) {
    return redirect('/')
  }
}
