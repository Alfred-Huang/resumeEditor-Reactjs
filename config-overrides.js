const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
     fixBabelImports('import', {
            libraryName: 'antd',
         libraryDirectory: 'es',
         style: true,
      }),
     addLessLoader({
          javascriptEnabled: true,
         modifyVars: {
             'layout-header-background': '#ffffff',
             'layout-header-height': '2',
             'layout-header-padding': '0',
             'layout-body-background': '#ffffff',
         },
     }),
 );
