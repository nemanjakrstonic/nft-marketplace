/** Keep all events except click **/
export function isLoggedIn() {
    return localStorage.getItem('loggedin');
}