declare const VERSION: string;
declare const SERVER_API_URL: string;
declare const DEVELOPMENT: string;
declare const I18N_HASH: string;

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '@laboratory/entities-routes' {
  const _default: () => JSX.Element;
  export default _default;
}

declare module '@laboratory/entities-menu' {
  const _default: () => JSX.Element;
  export default _default;
}

declare module '@laboratory/medical-user-routes' {
  const _default: () => JSX.Element;
  export default _default;
}
