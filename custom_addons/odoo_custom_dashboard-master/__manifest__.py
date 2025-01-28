# -*- coding: utf-8 -*-


{
    'name' : 'Owl Tutorial',
    'version' : '1.0',
    'author': 'WireApps',
    'summary': 'OWL Tutorial Custom Dashboard',
    'sequence': -1,
    'description': """OWL Tutorial Custom Dashboard""",
    'category': 'OWL',
    'depends' : ['base', 'web', 'sale', 'board'],
    'data': [
        'views/sales_dashboard.xml',
    ],
    'demo': [
    ],
    'installable': True,
    'application': True,
    'assets': {
        'web.assets_backend': [
            '/odoo_custom_dashboard-master/static/src/components/sales_dashboard.js',
            '/odoo_custom_dashboard-master/static/src/components/sales_dashboard.xml',
            '/odoo_custom_dashboard-master/static/src/components/js/card.js',
            '/odoo_custom_dashboard-master/static/src/components/xml/kpi_card.xml',


        ],
    },

}
