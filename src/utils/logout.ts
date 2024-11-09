export const handleLogout = async (redirect?: () => void) => {
   redirect?.()
   localStorage.clear()
   sessionStorage.clear()
}
