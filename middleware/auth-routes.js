export default async function ({ window, app, store, redirect, route }) {
  // const isUserSignedIn = store.state.auth.loggedIn
  const isUserSignedIn = true
  const role = true
  const authRoutes = store.state.authRoutes

  if (!isUserSignedIn && authRoutes.includes(route.path)&&role) {
    return redirect('/')
  }
}
