

export default function CheckRequiredValueAndReturn(prefix: any, value: any): any {
    if (!value) throw prefix + ' is missed!'
    return value
}