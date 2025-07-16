import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      allowedHosts: [
        // consenti questo host specifico
        'api.mountain-experience.blog',
        // se vuoi permettere anche eventuali sottodomini, usa:
        // '.mountain-experience.blog'
      ],
    }
  });
};
