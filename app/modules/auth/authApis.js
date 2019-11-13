import { api } from '../../bootstrap/bootstrapApi';

export const loginApi = payload => api.post('/api/login', payload);
