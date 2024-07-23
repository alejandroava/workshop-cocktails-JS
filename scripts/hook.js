// Codigo de guardian y ruteo
export function Router() {
    const path = window.location.pathname;

    if (path === '/workshop-cocktails/view/home.html') {
        if (localStorage.getItem(email)) {
            NavigateTo('/workshop-cocktails/view/home.html')
            return;
        } else {
            NavigateTo('/workshop-cocktails/index.html')
        }
    }
    if (path === '/workshop-cocktails/view/home.html') {
        if (!localStorage.getItem(email)) {
            NavigateTo('/workshop-cocktails/index.html')
            return;
        }
    }
}
export function NavigateTo (path) {
    window.history.pushState({}, '', window.location.origin + path)
    Router()
}