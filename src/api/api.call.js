import { config } from './api.config';

export const getOne = async () => {
  return await fetch(config.path).then((res) => res.json());
};
