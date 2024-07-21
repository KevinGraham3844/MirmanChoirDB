import axios from 'axios'
const baseUrl = '/api/repertoire'

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

const create = async (newObj) => {

    console.log('Here it is being sent to the server:', newObj)
    const response = await axios.post(baseUrl, newObj)
    return response.data
}

const getSingleEntry = async id => {
    const specificIdUrl = `${baseUrl}/${id}`
    const response = await axios.get(specificIdUrl)
    return response.data
}

const deleteEntry = async (requestedEntry) => {
    console.log('delete entry called', requestedEntry)
    const specificIdUrl = `${baseUrl}/${requestedEntry.id}`
    await axios.delete(specificIdUrl, requestedEntry)
}

const updateEntry = async (updatedPiece) => {
    const specificIdUrl = `${baseUrl}/${updatedPiece.id}`
    const response = await axios.put(specificIdUrl, updatedPiece)
    return response.data
}

export default { getAll, create, getSingleEntry, deleteEntry, updateEntry }