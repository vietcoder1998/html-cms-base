export function ConfigException(code?: number, msg?: string, detail?: any) {
    return new Error(msg)
}