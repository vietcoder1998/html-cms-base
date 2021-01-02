export function ConfigException(code?: number, msg?: string, detail?: any) {
    return {
        code, msg, detail
    }
}