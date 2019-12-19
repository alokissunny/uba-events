export  function initEvents (data) {
    return {
        type : 'INIT',
        data : data
    }

}
export function selectEvent(event ) {
    return {
        type : 'SELECT',
        data : event
    }
}