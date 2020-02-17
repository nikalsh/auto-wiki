const sidebar = require('vuepress-auto-sidebar')

module.exports = {
    themeConfig: {
        sidebar: sidebar.getSidebar(),
        sidebarDepth: 2,
        lastUpdated: 'Latest updated', // string | boolean
    }
}
