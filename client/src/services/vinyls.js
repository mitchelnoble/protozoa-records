import api from './api-config';

export const postVinyl = async (data) => {
  const resp = await api.post('/vinyls', { vinyl: data})
  return resp.data
}

export const getAllVinyls = async () => {
  const resp = await api.get('/vinyls')
  return resp.data
}

export const readOneVinyl = async (id) => {
  const resp = await api.get(`/vinyls/${id}`);
  return resp.data
}

export const updateVinyl = async (id, data) => {
  const resp = await api.put(`/vinyls/${id}`, { vinyl: data })
  return resp.data
}

export const destroyVinyl = async (id) => {
  const resp = await api.delete(`/vinyls/${id}`)
  return resp.data
}