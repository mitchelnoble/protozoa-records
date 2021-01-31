import api from './api-config';

export const createVinyl = async (data) => {
  const resp = await api.post('/vinyls', { vinyl: data})
  return resp.data
}

export const readAllVinyls = async () => {
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