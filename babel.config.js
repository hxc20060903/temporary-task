module.exports = function config(api) {
  const isProduction = api.env() === 'production';
  const presets = [
    ['@babel/env', {
      useBuiltIns: 'entry',
      targets: 'last 2 years, not dead',
    }],
    '@babel/react',
  ];
  const plugins = [
    '@babel/proposal-object-rest-spread',
    '@babel/proposal-class-properties',
    '@babel/proposal-export-namespace-from',
    '@babel/transform-runtime',
    'lodash',
    ['emotion', { sourceMap: !isProduction, autoLabel: !isProduction }],
    isProduction && 'transform-react-remove-prop-types',
  ].filter(Boolean);
  return {
    presets,
    plugins,
  };
};
