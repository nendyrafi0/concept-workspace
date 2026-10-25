import { registerSW } from "virtual:pwa-register"
    
registerSW({
    immediate: true,
    onOfflineReady() {
        console.info("Aplikasi siap digunakan offline.")
    },
})
