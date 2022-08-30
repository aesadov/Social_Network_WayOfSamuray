export const updateObjectInArray = (items: Array<any>, itemId: any, objPropName: any, newObjProp: any) => {
    return items.map(o => {
        if (o[objPropName] === itemId) {
            return {...o, ...newObjProp}
        }
        return o
    })
}
