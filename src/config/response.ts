export default function ConfigResoponse(code?: number, msg?: string, data?: any) {
    return {
        code,
        msg,
        data
    }
}