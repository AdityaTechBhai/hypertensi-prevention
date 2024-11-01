import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

const pluginObjects = {
  react: pluginReact,
};

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    plugins: pluginObjects,
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", // Menggunakan 'detect' akan secara otomatis mendeteksi versi React yang terinstal
      },
    },
  },
];
